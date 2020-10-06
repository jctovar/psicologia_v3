import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { GravatarPipe } from "./gravatar.pipe"; // <---
import { TruncatePipe } from "./truncate.pipe"; // <---
import { HtmlSanitizerPipe } from "./html-sanitizer.pipe"; // <---
//import { StoragePipe } from "./firestorage.pipe"; // <---

@NgModule({
    declarations:[
        GravatarPipe,
        HtmlSanitizerPipe,
        TruncatePipe
        //StoragePipe
    ], // <---
    imports:[
        CommonModule
    ],
    exports:[
        GravatarPipe,
        HtmlSanitizerPipe,
        TruncatePipe
        //StoragePipe
    ] // <---
})

export class MainPipe{}