import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { BookmarksComponent } from "./bookmarks.component";
import { CoordinationDetailComponent } from "./coordination-detail/coordination-detail.component";

const routes: Routes = [
    { path: "", component: BookmarksComponent },
    { path: "item/:id", component: CoordinationDetailComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class BookmarksRoutingModule { }
