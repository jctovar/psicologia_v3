import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { BookmarksComponent } from "./bookmarks.component";
import { BookmarksDetailComponent } from "./coordination-detail/bookmarks-detail.component";

const routes: Routes = [
    { path: "", component: BookmarksComponent },
    { path: "item/:id", component: BookmarksDetailComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class BookmarksRoutingModule { }
