import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Widget } from "./widget";
import { WidgetDataService } from "./widget.dataservice";

@Component({
    moduleId: module.id,
    selector: "widget-store",
    templateUrl: "store.component.html",
    styleUrls: ["store.component.css"]
})

export class StoreComponent implements OnInit {
    widgets: Array<Widget>;

    constructor(
        private router: Router,
        private widgetDataService: WidgetDataService) {
    }

    ngOnInit(): void {
        this.widgetDataService.getAllWidgets()
            .subscribe((widgets) => {
                this.widgets = widgets;
            });
    }

//   gotoDetail(hero: Hero): void {
//     let link = ["/detail", hero.id];
//     this.router.navigate(link);
//   }
}