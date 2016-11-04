import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Widget } from "./widget";
import { WidgetDataService, Category } from "./widget.dataservice";
import { Order } from "./order";
import { OrderDataService } from "./order.dataservice";

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
    currentOrderName: string = null;
    currentOrderId: number = null;

    constructor(
        private router: Router,
        private widgetDataService: WidgetDataService,
        private orderDataService: OrderDataService) {
    }

    ngOnInit(): void {
        this.widgetDataService.getCategories()
            .subscribe((categories) => {
                this.categories = categories;
            });
    }

    goToOrdersPage(id) {
        this.router.navigate(["/orders", id]);
    }

    createOrder(name: string) {
        this.orderDataService.createNewOrder(name)
            .subscribe((data) => {
                this.currentOrderId = data.order_id;
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