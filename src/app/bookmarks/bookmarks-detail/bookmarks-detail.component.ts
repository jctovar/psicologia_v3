import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import * as SocialShare from "nativescript-social-share";
import * as utils from "tns-core-modules/utils/utils";
import { FirestoreService } from "../../shared/firestore.service";

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

    openBrowser(url) {
        utils.openUrl(url)
    }

    deleteItem(item) {
        this.firestoreService.DeleteBookMark(item.id);
        this._routerExtensions.navigateByUrl("home");
    }

    shareItem(item) {
        SocialShare.shareUrl(item.url, item.title);
    }

    getItem(id): void {
        this.firestoreService.GetBookMark(id).then(result => {
            this.item = result[0].item;
            if (this.item) this.condition = true;
        });
    }
}
