import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { FeaturedRoutingModule } from "./coordination-routing.module";
import { FeaturedComponent } from "./coordination.component";

import { CoordinationDetailComponent } from "./coordination-detail/coordination-detail.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        FeaturedRoutingModule
    ],
    declarations: [
        FeaturedComponent,
        CoordinationDetailComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class FeaturedModule { }
