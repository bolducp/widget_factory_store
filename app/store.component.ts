import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Widget } from "./widget";
import { WidgetDataService, Category } from "./widget.dataservice";

@Component({
    moduleId: module.id,
    selector: "widget-store",
    templateUrl: "store.component.html",
    styleUrls: ["store.component.css"]
})

export class StoreComponent implements OnInit {
    widgets: Array<Widget>;
    categories: Array<Category>;
    selectedCategoryID: number = null;

    constructor(
        private router: Router,
        private widgetDataService: WidgetDataService) {
    }

    ngOnInit(): void {
        this.widgetDataService.getCategories()
            .subscribe((categories) => {
                this.categories = categories;
            });
    }

    updateInventoryList(categoryId: number) {
        this.selectedCategoryID = categoryId;

        this.widgetDataService.getWidgetsByCategory(categoryId)
            .subscribe((widgets) => {
                this.widgets = widgets;
            });
    }
}