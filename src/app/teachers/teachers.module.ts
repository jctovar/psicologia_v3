import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { TeachersRoutingModule } from "./teachers-routing.module";
import { TeachersComponent } from "./teachers.component";

import { TeachersDetailComponent } from "./teachers-detail/teachers-detail.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        TeachersRoutingModule
    ],
    declarations: [
        TeachersComponent,
        TeachersDetailComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class TeachersModule { }
