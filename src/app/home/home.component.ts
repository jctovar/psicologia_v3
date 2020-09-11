import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { getFile, getImage, getJSON, getString, request, HttpResponse } from "tns-core-modules/http";
import { reloadUser } from "nativescript-plugin-firebase";

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
}
