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
var http_1 = require("@angular/http");
var rxjs_1 = require("rxjs");
var WidgetDataService = (function () {
    function WidgetDataService(http) {
        this.http = http;
    }
    WidgetDataService.prototype.getAllWidgets = function () {
        var _this = this;
        return rxjs_1.Observable.create(function (observable) {
            _this.http
                .get("https://challenge.emocha.com/widgets")
                .map(function (r) { return r.json().data.items; })
                .subscribe(function (data) {
                observable.next(data);
                observable.complete();
            }, function (error) {
                console.error("Error caught while getting widgets: ", error);
                observable.next([]);
                observable.complete();
            });
        });
    };
    WidgetDataService.prototype.getCategories = function () {
        var _this = this;
        return rxjs_1.Observable.create(function (observable) {
            _this.http
                .get("https://challenge.emocha.com/categories")
                .map(function (r) { return r.json().data.items; })
                .subscribe(function (data) {
                observable.next(data);
                observable.complete();
            }, function (error) {
                console.error("Error caught while getting categories: ", error);
                observable.next([]);
                observable.complete();
            });
        });
    };
    WidgetDataService.prototype.getWidgetsByCategory = function (id) {
        var _this = this;
        return rxjs_1.Observable.create(function (observable) {
            _this.http
                .get("https://challenge.emocha.com/widgets?category_id=" + id)
                .map(function (r) { return r.json().data.items; })
                .subscribe(function (data) {
                observable.next(data);
                observable.complete();
            }, function (error) {
                console.error("Error caught while getting widgets by category: ", error);
                observable.next([]);
                observable.complete();
            });
        });
    };
    WidgetDataService.prototype.getWidgetColor = function (id) {
        var _this = this;
        return rxjs_1.Observable.create(function (observable) {
            _this.http
                .get("https://challenge.emocha.com/color/" + id)
                .map(function (r) { return r.json().data.item; })
                .subscribe(function (data) {
                console.log(data);
                observable.next(data);
                observable.complete();
            }, function (error) {
                console.error("Error caught while getting widgets by category: ", error);
                observable.next([]);
                observable.complete();
            });
        });
    };
    WidgetDataService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], WidgetDataService);
    return WidgetDataService;
}());
exports.WidgetDataService = WidgetDataService;
var Category = (function () {
    function Category() {
    }
    return Category;
}());
exports.Category = Category;
//# sourceMappingURL=widget.dataservice.js.map