import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { FirestoreService } from "../shared/firestore.service";
import * as Calendar from "nativescript-calendar";
import { confirm, ConfirmOptions } from "tns-core-modules/ui/dialogs";
import { alert, prompt } from "tns-core-modules/ui/dialogs";

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
        this.showConfirmDialog(item);
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
            notes: item.description,
            calendar: {
                name: "Psicología en línea",
                // the color, in this case red
                color: "#42a5f5",
                // Can be used on Android to group the calendars. Examples: Your app name, or an emailaddress
                accountName: "Psicología en línea"
            },
            reminders: {
                first: 30,
                second: 10
            }
        };

        Calendar.createEvent(options)
            .then((createdId) => {
                this.alert("Se creo el evento satisfactoriamente en calendario");
            },
            (error) =>{
                this.alert("Ocurrio un error: " + error);           }
        );
    }

    showConfirmDialog(item) {
        const confirmOptions: ConfirmOptions = {
            title: "Añadir evento al calendario",
            message: "Desea añadir el evento '" + item.name + "' a su calendario?",
            okButtonText: "Si",
            cancelButtonText: "No"
        };
        confirm(confirmOptions)
            .then((result) => {
                if(result == true) {
                    console.log("voy a añadir el evento....");
                    this.addEventCalendar(item)
                }
        });
    }

    alert(message: string) {
        return alert({
            title: "Psicología en línea",
            okButtonText: "Aceptar",
            message: message
        });
    }
}
