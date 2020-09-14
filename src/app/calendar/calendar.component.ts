import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { FirestoreService } from "../shared/firestore.service";
import * as Calendar from "nativescript-calendar";

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
            //console.log(this.items);
            if (this.items.length > 0) this.condition = true;
        });
    }

    onTap(item) {
        this.addEventCalendar(item)
        console.log(new Date(item.startdate).getTime());
        console.log(new Date(item.enddate).getTime());
        console.log(new Date().getTime() + (60*60*1000));
    }

    addEventCalendar(item) {
        var startDate = new Date(item.startdate).getTime();
        var endDate = new Date(item.enddate).getTime();

        // Only the `title`, `startDate` and `endDate` are mandatory, so this would suffice:
        var options = {
            title: item.name,
            // Make sure these are valid JavaScript Date objects.
            // In this case we schedule an Event for now + 1 hour, lasting 1 hour.
            startDate: new Date(startDate),
            endDate: new Date(endDate),
            calendar: {
                name: "Psicología en línea",
                // the color, in this case red
                color: "#42a5f5",
                // Can be used on Android to group the calendars. Examples: Your app name, or an emailaddress
                accountName: "Psicología en línea"
              }
        };

        Calendar.createEvent(options).then(
            function(createdId) {
                console.log("Created Event with ID: " + createdId);
            },
            function(error) {
                console.log("Error creating an Event: " + error);
            }
        );
    }
}
