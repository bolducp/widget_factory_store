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
        this.selectedCategory = null;
        this.selectedSize = null;
        this.selectedColor = null;
        this.currentOrderName = null;
        this.currentOrderId = null;
    }
    StoreComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.widgetDataService.getCategories()
            .subscribe(function (categories) {
            _this.categories = categories;
        });
        this.widgetDataService.getSizes()
            .subscribe(function (sizes) {
            _this.sizes = sizes;
        });
        this.widgetDataService.getColors()
            .subscribe(function (colors) {
            _this.colors = colors;
        });
    };
    StoreComponent.prototype.goToOrdersPage = function (id) {
        this.router.navigate(["/orders", id]);
    };
    StoreComponent.prototype.getOrder = function (id) {
        var _this = this;
        this.orderDataService.getOrder(id)
            .subscribe(function (data) {
            _this.currentOrderId = data.order_id;
            _this.currentOrderName = data.name;
        });
    };
    StoreComponent.prototype.createOrder = function (name) {
        var _this = this;
        this.orderDataService.createNewOrder(name)
            .subscribe(function (data) {
            _this.currentOrderName = name;
            _this.currentOrderId = data.order_id;
        });
    };
    StoreComponent.prototype.updateInventoryList = function (filterType, filterId) {
        var _this = this;
        if (filterId == 0) {
            this.updateSelectedCategory(+this.selectedCategory.category_id);
            this.resetSelectedColorAndSize();
        }
        else if (filterType === "size") {
            this.resetSelectedColorAndSize();
            this.selectedSize = this.getSelectedSizeFromId(filterId);
            this.widgetDataService.getWidgetsByCategoryAndSize(+this.selectedCategory.category_id, filterId)
                .subscribe(function (widgets) {
                _this.widgets = widgets;
            });
        }
        else if (filterType === "color") {
            this.resetSelectedColorAndSize();
            this.selectedColor = this.getSelectedColorFromId(filterId);
            this.widgetDataService.getWidgetsByCategoryAndColor(+this.selectedCategory.category_id, filterId)
                .subscribe(function (widgets) {
                _this.widgets = widgets;
            });
        }
    };
    StoreComponent.prototype.resetSelectedColorAndSize = function () {
        this.selectedSize = null;
        this.selectedColor = null;
    };
    StoreComponent.prototype.updateSelectedCategory = function (categoryId) {
        var _this = this;
        this.selectedCategory = this.getSelectedCategoryFromId(categoryId);
        this.widgetDataService.getWidgetsByCategory(categoryId)
            .subscribe(function (widgets) {
            _this.widgets = widgets;
        });
    };
    StoreComponent.prototype.getSelectedCategoryFromId = function (categoryId) {
        var filteredCategoryArray = this.categories.filter(function (obj) {
            return obj.category_id == categoryId;
        });
        return filteredCategoryArray[0];
    };
    StoreComponent.prototype.getSelectedSizeFromId = function (sizeId) {
        var filteredSizeArray = this.sizes.filter(function (obj) {
            return obj.size_id == sizeId;
        });
        return filteredSizeArray[0];
    };
    StoreComponent.prototype.getSelectedColorFromId = function (colorId) {
        var filteredColorArray = this.colors.filter(function (obj) {
            return obj.color_id == colorId;
        });
        return filteredColorArray[0];
    };
    StoreComponent.prototype.addWidgetToOrder = function (widgetId, quantity) {
        if (quantity === void 0) { quantity = 1; }
        console.log("!!!", widgetId);
        this.orderDataService.addWidgetToOrder(this.currentOrderId, widgetId, quantity)
            .subscribe(function (data) {
            console.log(data);
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