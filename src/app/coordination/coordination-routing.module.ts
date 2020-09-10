import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { FeaturedComponent } from "./coordination.component";
import { CoordinationDetailComponent } from "./coordination-detail/coordination-detail.component";

const routes: Routes = [
    { path: "", component: FeaturedComponent },
    { path: "item/:id", component: CoordinationDetailComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class FeaturedRoutingModule { }
