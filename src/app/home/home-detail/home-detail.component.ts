import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";

//import { DataService, DataItem } from "../../shared/data.service";

@Component({
    selector: "HomeDetail",
    templateUrl: "./home-detail.component.html"
})
export class HomeDetailComponent implements OnInit {
    //item: DataItem;
    item = [];

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
