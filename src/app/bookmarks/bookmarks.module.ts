import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { BookmarksRoutingModule } from "./bookmarks-routing.module";
import { BookmarksComponent } from "./bookmarks.component";

import { CoordinationDetailComponent } from "./coordination-detail/coordination-detail.component";

import { MainPipe } from '../../pipes/pipes.module';

@NgModule({
    imports: [
        NativeScriptCommonModule,
        BookmarksRoutingModule,
        MainPipe,
    ],
    declarations: [
        BookmarksComponent,
        CoordinationDetailComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class BookmarksModule { }
