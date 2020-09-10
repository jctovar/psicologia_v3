import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", loadChildren: () => import("~/app/home/home.module").then((m) => m.HomeModule) },
    { path: "calendar", loadChildren: () => import("~/app/calendar/calendar.module").then((m) => m.CalendarModule) },
    { path: "teachers", loadChildren: () => import("~/app/teachers/teachers.module").then((m) => m.TeachersModule) },
    { path: "coordination", loadChildren: () => import("~/app/coordination/coordination.module").then((m) => m.FeaturedModule) },
    { path: "about", loadChildren: () => import("~/app/about/about.module").then((m) => m.AboutModule) }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
