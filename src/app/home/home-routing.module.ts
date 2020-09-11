import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { HomeComponent } from "./home.component";
import { HomeDetailComponent } from "./home-detail/home-detail.component";

const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "item/:id", component: HomeDetailComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class HomeRoutingModule { }
