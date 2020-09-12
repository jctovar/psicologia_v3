import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { GravatarPipe } from "./gravatar.pipe"; // <---
import { HtmlSanitizerPipe } from "./html-sanitizer.pipe"; // <---
//import { StoragePipe } from "./firestorage.pipe"; // <---

@NgModule({
    declarations:[
        GravatarPipe,
        HtmlSanitizerPipe
        //StoragePipe
    ], // <---
    imports:[
        CommonModule
    ],
    exports:[
        GravatarPipe,
        HtmlSanitizerPipe
        //StoragePipe
    ] // <---
})

export class MainPipe{}