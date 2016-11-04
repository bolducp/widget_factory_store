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
var widget_dataservice_1 = require("./widget.dataservice");
var order_dataservice_1 = require("./order.dataservice");
var StoreComponent = (function () {
    function StoreComponent(router, widgetDataService, orderDataService) {
        this.router = router;
        this.widgetDataService = widgetDataService;
        this.orderDataService = orderDataService;
        this.selectedCategoryID = null;
        this.currentOrderName = null;
        this.currentOrderId = null;
    }
    StoreComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.widgetDataService.getCategories()
            .subscribe(function (categories) {
            _this.categories = categories;
        });
    };
    StoreComponent.prototype.goToOrdersPage = function (id) {
        this.router.navigate(["/orders", id]);
    };
    StoreComponent.prototype.createOrder = function (name) {
        var _this = this;
        this.orderDataService.createNewOrder(name)
            .subscribe(function (data) {
            _this.currentOrderId = data.order_id;
        });
    };
    StoreComponent.prototype.updateInventoryList = function (categoryId) {
        var _this = this;
        this.selectedCategoryID = categoryId;
        this.widgetDataService.getWidgetsByCategory(categoryId)
            .subscribe(function (widgets) {
            _this.widgets = widgets;
        });
    };
    StoreComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "widget-store",
            templateUrl: "store.component.html",
            styleUrls: ["store.component.css"]
        }), 
        __metadata('design:paramtypes', [router_1.Router, widget_dataservice_1.WidgetDataService, order_dataservice_1.OrderDataService])
    ], StoreComponent);
    return StoreComponent;
}());
exports.StoreComponent = StoreComponent;
//# sourceMappingURL=store.component.js.map