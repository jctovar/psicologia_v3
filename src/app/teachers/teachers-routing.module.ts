import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { TeachersComponent } from "./teachers.component";
import { TeachersDetailComponent } from "./teachers-detail/teachers-detail.component";

const routes: Routes = [
    { path: "", component: TeachersComponent },
    { path: "item/:id", component: TeachersDetailComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class TeachersRoutingModule { }
