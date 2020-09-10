import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { FeaturedRoutingModule } from "./coordination-routing.module";
import { FeaturedComponent } from "./coordination.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        FeaturedRoutingModule
    ],
    declarations: [
        FeaturedComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class FeaturedModule { }
