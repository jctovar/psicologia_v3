import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { TeachersRoutingModule } from "./teachers-routing.module";
import { TeachersComponent } from "./teachers.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        TeachersRoutingModule
    ],
    declarations: [
        TeachersComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class TeachersModule { }
