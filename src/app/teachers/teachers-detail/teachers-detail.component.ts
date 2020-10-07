import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import db from "~/json/teachers.json";
import { openUrl } from "tns-core-modules/utils/utils";
import * as utils from "tns-core-modules/utils/utils";
import { isAndroid, isIOS, device, screen } from "tns-core-modules/platform";

//import { DataService, DataItem } from "../../shared/data.service";

@Component({
    selector: "TeachersDetail",
    templateUrl: "./teachers-detail.component.html"
})
export class TeachersDetailComponent implements OnInit {
    //item: DataItem;
    item: any;

    constructor(
       // private _data: DataService,
        private _route: ActivatedRoute,
        private _routerExtensions: RouterExtensions
    ) { }

    ngOnInit(): void {
        const id = +this._route.snapshot.params.id;
        console.log(id);
        this.getItem(id);

        if(isAndroid) {
            utils.ad.dismissSoftInput();
        }
    }

    onBackTap(): void {
        this._routerExtensions.back();
    }

    openEmail(url) {
        console.log('mailto:' + url);
        openUrl('mailto:' + url)
    }

    getItem(id): void {
        const json = db.teachers;

        for (var i = 0; i < json.length; i++){
            // look for the entry with a matching `code` value
            if (json[i].id == id){
               // we found it
               console.log(JSON.stringify(json[i]));
               this.item = json[i];
            }
        }
    }
}