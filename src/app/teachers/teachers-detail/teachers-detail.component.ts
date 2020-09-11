import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";

//import { DataService, DataItem } from "../../shared/data.service";

@Component({
    selector: "TeachersDetail",
    templateUrl: "./teachers-detail.component.html"
})
export class TeachersDetailComponent implements OnInit {
    //item: DataItem;

    constructor(
       // private _data: DataService,
        private _route: ActivatedRoute,
        private _routerExtensions: RouterExtensions
    ) { }

    ngOnInit(): void {
        const id = +this._route.snapshot.params.id;
        //this.item = this._data.getItem(id);
    }

    onBackTap(): void {
        this._routerExtensions.back();
    }
}