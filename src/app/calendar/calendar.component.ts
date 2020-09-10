import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { FirestoreService } from "../shared/firestore.service";

@Component({
    selector: "Calendar",
    templateUrl: "./calendar.component.html"
})
export class CalendarComponent implements OnInit {
    items = [];
    condition: boolean = false;

    constructor(private firestoreService: FirestoreService) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
        console.log()
        this.loadDataBase()
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    loadDataBase() {
        //this.snackBarSimple("Cargando datos...");
        this.firestoreService.GetDataCalendar().then(result => {
            this.items = result;
            if (this.items.length > 0) this.condition = true;
        });
    }
}
