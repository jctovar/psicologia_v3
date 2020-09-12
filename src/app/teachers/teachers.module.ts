import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { TeachersRoutingModule } from "./teachers-routing.module";
import { TeachersComponent } from "./teachers.component";

import { TeachersDetailComponent } from "./teachers-detail/teachers-detail.component";

import { MainPipe } from '../../pipes/pipes.module';

@NgModule({
    imports: [
        NativeScriptCommonModule,
        TeachersRoutingModule,
        MainPipe
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
