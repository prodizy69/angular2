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
var router_1 = require('@angular/router');
var core_1 = require('@angular/core');
var HeaderComponent = (function () {
    function HeaderComponent(route, _route) {
        this.showLoginModal = false;
        this.footerDisplay = true;
        this.route = route;
        // this.route.events.subscribe(event => {
        //   if (event.url !== 'business') {
        //     this.footerDisplay = false;
        //   }
        // });
        this.activatedRoute = _route;
        this.activatedRoute.params.subscribe(function (params) {
            console.log('Params from app :: ', params);
        });
    }
    HeaderComponent.prototype.openModal = function () {
        this.showLoginModal = !this.showLoginModal;
    };
    HeaderComponent.prototype.navigateTo = function (data) {
        var dataParams = [data];
        this.route.navigate(dataParams);
    };
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'header-comp',
            templateUrl: 'business/scripts/header-component/header-component.html',
            styleUrls: ['business/scripts/header-component/header-component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;

//# sourceMappingURL=header-component.js.map
