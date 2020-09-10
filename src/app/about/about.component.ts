import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import about from "~/json/about.json";

@Component({
    selector: "About",
    templateUrl: "./about.component.html"
})
export class AboutComponent implements OnInit {
    data: any;

    constructor() {
        // Use the component constructor to inject providers.
        this.data = about;
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
