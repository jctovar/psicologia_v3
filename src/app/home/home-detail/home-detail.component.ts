import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { WebView } from "tns-core-modules/ui/web-view";
import * as SocialShare from "nativescript-social-share";
import * as utils from "tns-core-modules/utils/utils";

//import { DataService, DataItem } from "../../shared/data.service";

var cache = require("nativescript-cache");

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

    constructor(
       // private _data: DataService,
        private _route: ActivatedRoute, private _routerExtensions: RouterExtensions
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
            }
        }

    }

    openBrowser(url) {
        console.log(url);
        utils.openUrl(url)
    }

    share(item) {
        //console.log('share... ', item.url, item.name);
        SocialShare.shareUrl(item.url, item.title);
    }

    like(item) {
        
    }
    
}
