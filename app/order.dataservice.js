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
var OrderDataService = (function () {
    function OrderDataService(http) {
        this.http = http;
    }
    OrderDataService.prototype.getAllOrders = function () {
        var _this = this;
        return rxjs_1.Observable.create(function (observable) {
            _this.http
                .get("https://challenge.emocha.com/orders")
                .map(function (r) { return r.json().data.items; })
                .subscribe(function (data) {
                observable.next(data);
                observable.complete();
            }, function (error) {
                console.error("Error caught while getting all orders: ", error);
                observable.next([]);
                observable.complete();
            });
        });
    };
    OrderDataService.prototype.getOrder = function (orderId) {
        var _this = this;
        return rxjs_1.Observable.create(function (observable) {
            _this.http
                .get("https://challenge.emocha.com/order/" + orderId)
                .map(function (r) { return r.json().data.item; })
                .subscribe(function (data) {
                observable.next(data);
                observable.complete();
            }, function (error) {
                console.error("Error caught while finding order: ", error);
                observable.next([]);
                observable.complete();
            });
        });
    };
    OrderDataService.prototype.createNewOrder = function (name) {
        var _this = this;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var bodyString = JSON.stringify({ "name": name });
        return rxjs_1.Observable.create(function (observable) {
            _this.http
                .post("https://challenge.emocha.com/order", bodyString, options)
                .map(function (r) { return r.json().data; })
                .subscribe(function (data) {
                observable.next(data);
                observable.complete();
            }, function (error) {
                console.error("Error caught while getting all orders: ", error);
                observable.next([]);
                observable.complete();
            });
        });
    };
    OrderDataService.prototype.addWidgetToOrder = function (orderId, widgetId, quantity) {
        var _this = this;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var bodyString = JSON.stringify({ "widget_id": widgetId, "quantity": quantity });
        return rxjs_1.Observable.create(function (observable) {
            _this.http
                .put("https://challenge.emocha.com/order/" + orderId, bodyString, options)
                .map(function (r) { return r.json().data; })
                .subscribe(function (data) {
                observable.next(data);
                observable.complete();
            }, function (error) {
                console.error("Error caught while adding widget to order: ", error);
                observable.next([]);
                observable.complete();
            });
        });
    };
    OrderDataService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
    ], OrderDataService);
    return OrderDataService;
    var _a;
}());
exports.OrderDataService = OrderDataService;
//# sourceMappingURL=order.dataservice.js.map