import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";

import { Order } from "./order";
import { OrderDataService } from "./order.dataservice";

@Component({
    moduleId: module.id,
    selector: "widget-order",
    templateUrl: "order.component.html",
    styleUrls: ["order.component.css"]
})

export class OrderComponent implements OnInit {
    order: Order;
    orders: Array<any>;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private orderDataService: OrderDataService) {
    }

    ngOnInit(): void  {
        this.route.params.forEach((params: Params) => {
            let id = params["id"];

            if (!isNaN(id)) {
                this.orderDataService.getOrder(id)
                    .subscribe((order) => {
                        this.order = order;
                });
            } 
            else {
                this.orderDataService.getAllOrders()
                    .subscribe((orders) => {
                        this.orders = orders;
                    });
            }
        })
    }
}
