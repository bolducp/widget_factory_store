"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var order_dataservice_1 = require("./order.dataservice");
var OrderComponent = (function () {
    function OrderComponent(router, route, orderDataService) {
        this.router = router;
        this.route = route;
        this.orderDataService = orderDataService;
    }
    OrderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            _this.orderDataService.getOrder(id)
                .subscribe(function (order) {
                _this.order = order;
            });
        });
    };
    OrderComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "widget-order",
            templateUrl: "order.component.html",
            styleUrls: ["order.component.css"]
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, order_dataservice_1.OrderDataService])
    ], OrderComponent);
    return OrderComponent;
}());
exports.OrderComponent = OrderComponent;
//# sourceMappingURL=order.component.js.map