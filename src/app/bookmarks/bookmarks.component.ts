import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import coordination from "~/json/coordination.json";

@Component({
    selector: "Bookmarks",
    templateUrl: "./bookmarks.component.html"
})
export class BookmarksComponent implements OnInit {
    items: any;

    constructor() {
        // Use the component constructor to inject providers.
        //this.items = coordination;
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
