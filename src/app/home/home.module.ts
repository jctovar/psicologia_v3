import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";

import { HomeDetailComponent } from "./home-detail/home-detail.component";

import { MainPipe } from '../../pipes/pipes.module';
import { TimeAgoPipe } from 'time-ago-pipe';

@NgModule({
    imports: [
        NativeScriptCommonModule,
        HomeRoutingModule,
        MainPipe,
    ],
    declarations: [
        HomeComponent,
        HomeDetailComponent,
        TimeAgoPipe,
        
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class HomeModule { }
