import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { CoordinationRoutingModule } from "./coordination-routing.module";
import { CoordinationComponent } from "./coordination.component";

import { CoordinationDetailComponent } from "./coordination-detail/coordination-detail.component";

import { MainPipe } from '../../pipes/pipes.module';

@NgModule({
    imports: [
        NativeScriptCommonModule,
        CoordinationRoutingModule,
        MainPipe
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
