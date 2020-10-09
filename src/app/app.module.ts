import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { NativeScriptMaterialCardViewModule } from "nativescript-material-cardview/angular";
import { NativeScriptMaterialActivityIndicatorModule } from "nativescript-material-activityindicator/angular";

import { FirestoreService } from "./shared/firestore.service"

import { AuthModule } from "./shared/auth/auth.module.tns"

@NgModule({
    bootstrap: [
        AppComponent
    ],
    providers: [
        FirestoreService,
        AuthModule
    ],
    imports: [
        AppRoutingModule,
        NativeScriptModule,
        NativeScriptUISideDrawerModule,
        NativeScriptMaterialCardViewModule,
        NativeScriptMaterialActivityIndicatorModule,
    ],
    declarations: [
        AppComponent,
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
