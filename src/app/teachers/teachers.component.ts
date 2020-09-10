import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import db from "~/json/teachers.json";

@Component({
    selector: "Teachers",
    templateUrl: "./teachers.component.html"
})
export class TeachersComponent implements OnInit {
    items: any;

    constructor() {
        // Use the component constructor to inject providers.
        this.items = db.teachers;
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
