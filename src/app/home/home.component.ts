import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { getJSON } from "tns-core-modules/http";
import * as SocialShare from "nativescript-social-share";
import { SnackBar, SnackBarOptions } from "@nstudio/nativescript-snackbar";
import { PullToRefresh } from '@nstudio/nativescript-pulltorefresh';
import { FirestoreService } from "../shared/firestore.service";

import { initializeOnAngular } from 'nativescript-image-cache';

var cache = require("nativescript-cache");

//import { getUUID } from '@owen-it/nativescript-uuid';

@Component({
    selector: "Home",
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    data = [];
    condition: boolean = false;

    constructor(private firestoreService: FirestoreService) {
        // Use the component constructor to inject providers.
        initializeOnAngular();
        // this.auth.anonymous();
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
                this.data = JSON.parse(cache.get("wordpress"));
                //console.log("from the cache... " + cache.get("wordpress"));
            } 
        }, (e) => {
            console.log("ocurrio un error: " + e);
            this.condition = true;
            this.data = JSON.parse(cache.get("wordpress"));
            this.snackBarSimple("cargando datos del cache...")
        });
    }

    share(item) {
        SocialShare.shareUrl(item.url, item.title);
    }

    save(item) {
        console.log(cache.get("uid"))
        this.firestoreService.SaveLike();
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