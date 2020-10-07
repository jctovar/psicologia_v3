import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { WebView } from "tns-core-modules/ui/web-view";
import * as SocialShare from "nativescript-social-share";
import * as utils from "tns-core-modules/utils/utils";
import { layout } from "tns-core-modules/utils/utils";
import { EventData } from "tns-core-modules/data/observable";
import { FirestoreService } from "../../shared/firestore.service";
import { SnackBar, SnackBarOptions } from "@nstudio/nativescript-snackbar";

//import { DataService, DataItem } from "../../shared/data.service";

var cache = require("nativescript-cache");
declare var android;

@Component({
    selector: "HomeDetail",
    templateUrl: "./home-detail.component.html"
})
export class HomeDetailComponent implements OnInit {
    //item: DataItem;
    data = [];
    item = [];
    json: any;
    condition: boolean = false;

    height: number = 0; // initial height

    constructor(
       // private _data: DataService,
        private _route: ActivatedRoute, private _routerExtensions: RouterExtensions, private changeDetectorRef: ChangeDetectorRef, private firestoreService: FirestoreService
    ) { }

    ngOnInit(): void {
        //console.log(this._route.snapshot.params);
        this.data.push(this._route.snapshot.params);
        //const id = +this._route.snapshot.params.id;
        console.log(this.data[0].id)
        //this.item = this._data.getItem(id);

        this.getCache(this.data[0].id);
    }

    onBackTap(): void {
        this._routerExtensions.back();
    }

    getCache(url) {
        this.json = JSON.parse(cache.get("wordpress"));

        for (var i = 0; i < this.json.length; i++){
            // look for the entry with a matching `code` value
            if (this.json[i].id == url){
               // we found it
               //console.log(JSON.stringify(this.json[i].content_text) );
               this.item = this.json[i];
               if (this.item) this.condition = true;
            }
        }
    }

    openBrowser(url) {
        console.log(url);
        utils.openUrl(url)
    }

    shareItem(item) {
        //console.log('share... ', item.url, item.name);
        SocialShare.shareUrl(item.url, item.title);
    }

    saveItem(item) {
        this.firestoreService.SetBookMarks(item).then(result => {
            if (result) this.snackBarSimple("marcador guardado...")
        });
    }

    onWebViewLoadFinished(event: EventData) {
        const webView = <WebView>event.object,
            jsStr = `var body = document.body;
            var html = document.documentElement;
            Math.max( body.scrollHeight, body.offsetHeight, 
            html.clientHeight, html.scrollHeight, html.offsetHeight);`;
    
        if (webView.ios) {
            webView.ios.scrollView.scrollEnabled = false;
            webView.ios.evaluateJavaScriptCompletionHandler(jsStr,
                (
                    result,
                    error
                ) => {
                    if (error) {
                        console.log("error...");
                    } else if (result) {
                        this.height = layout.toDeviceIndependentPixels(result);
                        this.changeDetectorRef.detectChanges();
                    }
                });
        } else if (webView.android) {
            // Works only on Android 19 and above
            webView.android.evaluateJavascript(
                jsStr,
                new android.webkit.ValueCallback({
                    onReceiveValue: (height) => {
                        this.height = layout.toDeviceIndependentPixels(height);
                        this.changeDetectorRef.detectChanges();
                    }
                })
            );
        }
    }

    snackBarSimple(message) {
        const snackbar = new SnackBar();
        
        snackbar.simple(message, '#ffffff', '#4f5154', 3, false);
    }
}