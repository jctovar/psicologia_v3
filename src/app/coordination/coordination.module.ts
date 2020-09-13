import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { CoordinationRoutingModule } from "./coordination-routing.module";
import { CoordinationComponent } from "./coordination.component";

import { CoordinationDetailComponent } from "./coordination-detail/coordination-detail.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        CoordinationRoutingModule
    ],
    declarations: [
        CoordinationComponent,
        CoordinationDetailComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class CoordinationModule { }
