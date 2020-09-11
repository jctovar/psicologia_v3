import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { getFile, getImage, getJSON, getString, request, HttpResponse } from "tns-core-modules/http";
import { ActivityIndicator } from "tns-core-modules/ui/activity-indicator";
import { EventData, Observable } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";
import * as SocialShare from "nativescript-social-share";

@Component({
    selector: "Home",
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    data = [];
    condition: boolean = false;

    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
        this.readRSS()
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    readRSS() {
        getJSON("https://suayed.iztacala.unam.mx/feed/json").then((result: any) => {
            this.data = result.items;
            //console.log(this.data);
            if (this.data.length > 0) this.condition = true;
        }, (e) => {
        });
    }

    share(item) {
        //console.log('share... ', item.url, item.name);
        SocialShare.shareUrl(item.url, item.title);
    }

    save(item) {
        
    }
}