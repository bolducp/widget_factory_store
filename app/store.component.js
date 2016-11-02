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
var StoreComponent = (function () {
    function StoreComponent(router, widgetDataService) {
        this.router = router;
        this.widgetDataService = widgetDataService;
    }
    StoreComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.widgetDataService.getAllWidgets()
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
        __metadata('design:paramtypes', [router_1.Router, widget_dataservice_1.WidgetDataService])
    ], StoreComponent);
    return StoreComponent;
}());
exports.StoreComponent = StoreComponent;
//# sourceMappingURL=store.component.js.map