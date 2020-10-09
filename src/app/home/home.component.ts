import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { getJSON } from "tns-core-modules/http";
import * as SocialShare from "nativescript-social-share";
import { SnackBar, SnackBarOptions } from "@nstudio/nativescript-snackbar";
import { FirestoreService } from "../shared/firestore.service";
import { initializeOnAngular } from 'nativescript-image-cache';

import { registerElement } from "nativescript-angular/element-registry";
registerElement("PullToRefresh", () => require("@nstudio/nativescript-pulltorefresh").PullToRefresh);

var cache = require("nativescript-cache");

@Component({
    selector: "Home",
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    items = [];
    condition: boolean = false;

    constructor(private firestoreService: FirestoreService) {
        initializeOnAngular();
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
                cache.set("wordpress", JSON.stringify(result.items));
                this.items = JSON.parse(cache.get("wordpress"));
                this.condition = true;
            } 
        }, (err) => {
            console.log("ocurrio un error: " + err);
            this.items = JSON.parse(cache.get("wordpress"));
            this.snackBarSimple("cargando datos del cache...")
            this.condition = true;
        });
    }

    shareItem(item) {
        SocialShare.shareUrl(item.url, item.title);
    }

    snackBarSimple(message) {
        const snackbar = new SnackBar();
        
        snackbar.simple(message, '#ffffff', '#4f5154', 3, false);
    }

    refreshList(args) {
        const pullRefresh = args.object;

        console.log("reload data")
        this.loadRSS()

        setTimeout(function () {
           pullRefresh.refreshing = false;
        }, 1000);
   }
}