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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
require('rxjs/add/operator/filter');
require('rxjs/add/operator/map');
require('rxjs/add/operator/mergeMap');
var AppComponent = (function () {
    function AppComponent(route, activatedRoute) {
        this.route = route;
        this.activatedRoute = activatedRoute;
        this.footerDisplay = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.events
            .filter(function (event) { return event instanceof router_1.NavigationEnd; })
            .map(function () { return _this.activatedRoute; })
            .map(function (route) {
            while (route.firstChild) {
                route = route.firstChild;
            }
            return route;
        })
            .filter(function (route) { return route.outlet === 'primary'; })
            .mergeMap(function (route) { return route.data; })
            .subscribe(function (event) {
            _this.footerDisplay = event.footer;
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'business-app',
            templateUrl: 'business/scripts/app.component.html',
            styleUrls: [
                'business/scripts/app.component.css'
            ]
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=app.component.js.map
