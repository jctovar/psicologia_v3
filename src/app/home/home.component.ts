import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { getJSON } from "tns-core-modules/http";
import * as SocialShare from "nativescript-social-share";
import { SnackBar, SnackBarOptions } from "@nstudio/nativescript-snackbar";
import { PullToRefresh } from '@nstudio/nativescript-pulltorefresh';
import { FirestoreService } from "../shared/firestore.service";

var cache = require("nativescript-cache");

@Component({
    selector: "Home",
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    items = [];
    condition: boolean = false;

    constructor(private firestoreService: FirestoreService) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        this.loadRSS()
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    loadRSS() {
        getJSON("https://suayed.iztacala.unam.mx/feed/json").then((result: any) => {
            if (result.items.length > 0) {
                this.condition = true;
                cache.set("wordpress", JSON.stringify(result.items));
                this.items = JSON.parse(cache.get("wordpress"));
            } 
        }, (err) => {
            console.log("ocurrio un error: " + err);
            this.condition = true;
            this.items = JSON.parse(cache.get("wordpress"));
            this.snackBarSimple("cargando datos del cache...")
        });
    }

    shareItem(item) {
        SocialShare.shareUrl(item.url, item.title);
    }

    saveItem(item) {
        this.firestoreService.SetBookMarks(item).then(result => {
            if (result) this.snackBarSimple("marcador guardado...")
        });
    }

    snackBarSimple(message) {
        const snackbar = new SnackBar();
        
        snackbar.simple(message, '#ffffff', '#4f5154', 3, false);
    }

    refreshList(args) {
        const pullRefresh = args.object as PullToRefresh;
        
        setTimeout(function () {
           pullRefresh.refreshing = false;
        }, 1000);
   }
}