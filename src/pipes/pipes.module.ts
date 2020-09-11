import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { GravatarPipe } from "./gravatar.pipe"; // <---
//import { StoragePipe } from "./firestorage.pipe"; // <---

@NgModule({
    declarations:[
        GravatarPipe,
        //StoragePipe
    ], // <---
    imports:[
        CommonModule
    ],
    exports:[
        GravatarPipe,
        //StoragePipe
    ] // <---
})

export class MainPipe{}