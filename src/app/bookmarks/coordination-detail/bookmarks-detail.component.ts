import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { FirestoreService } from "../../shared/firestore.service";
import { openUrl } from "tns-core-modules/utils/utils";

@Component({
    selector: "BookmarksDetail",
    templateUrl: "./bookmarks-detail.component.html"
})
export class BookmarksDetailComponent implements OnInit {
    item: [];
    condition: boolean = false;

    constructor(private _route: ActivatedRoute, private _routerExtensions: RouterExtensions, private firestoreService: FirestoreService) { }

    ngOnInit(): void {
        const id = this._route.snapshot.params.id;
        this.getItem(id);
    }

    onBackTap(): void {
        this._routerExtensions.back();
    }

    openEmail(url) {
        console.log('mailto:' + url);
        openUrl('mailto:' + url)
    }

    getItem(id): void {
        this.firestoreService.GetBookMark(id).then(result => {
            this.item = result[0].item;
            // console.log('resultado... ' + JSON.stringify(this.item))
            //if (this.item.length > 0) this.condition = true;
        });
    }
}
