import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import db from "~/json/teachers.json";
import { SearchBar } from "tns-core-modules/ui/search-bar";
import * as utils from "tns-core-modules/utils/utils";
import { isAndroid, isIOS, device, screen } from "tns-core-modules/platform";

@Component({
    selector: "Teachers",
    templateUrl: "./teachers.component.html"
})
export class TeachersComponent implements OnInit {
    items = [];
    searchPhrase: string = "";

    constructor() {
        // Use the component constructor to inject providers.
        this.items = this.filterItems(this.searchPhrase);
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();

        if(isAndroid) {
            utils.ad.dismissSoftInput();
        }
    }

    onSubmit(args) {
        const searchBar = args.object as SearchBar;
        console.log(`Searching for ${searchBar.text}`);
    }

    onTextChanged(args) {
        const searchBar = args.object as SearchBar;
        console.log(`Input changed! New value: ${searchBar.text}`);
        this.items = this.filterItems(searchBar.text);
    }

    onClear(args) {
        const searchBar = args.object as SearchBar;
        console.log(`Clear event raised`);
    }

    // Function for filter names
    filterItems(searchTerm: string){
        const json = db.teachers;
        
        return json.filter((item) => {
            return item.name.toLowerCase().indexOf(
              searchTerm.toLowerCase()) > -1;
        });
    }
}