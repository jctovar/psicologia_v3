import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";

import { HomeDetailComponent } from "./home-detail/home-detail.component";

import { SafePipeModule } from 'safe-pipe';

@NgModule({
    imports: [
        NativeScriptCommonModule,
        HomeRoutingModule,
        SafePipeModule
    ],
    declarations: [
        HomeComponent,
        HomeDetailComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class HomeModule { }
