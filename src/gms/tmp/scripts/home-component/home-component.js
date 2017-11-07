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
var app_service_1 = require('./../services/app.service');
var http_service_1 = require('./../services/http-service');
var router_1 = require('@angular/router');
var core_1 = require('@angular/core');
var HomeComponent = (function () {
    function HomeComponent(route, httpService, appService) {
        this.route = route;
        this.httpService = httpService;
        this.appService = appService;
        this.getPlayerInfo();
        console.log(this.playerInfo);
        var url = this.appService.getServerUril();
        console.log(url);
    }
    HomeComponent.prototype.getPlayerInfo = function () {
        var _this = this;
        var data = 'startDate=2017-10-25 00:00:00&endDate=2017-11-06 00:00:00&accountId=1';
        return this.httpService.request({
            url: 'https://staging-gms.indianrummynetwork.com/redirect.php?name=player',
            method: 'post',
            body: data
        }).subscribe(function (res) {
            _this.playerInfo = res;
            console.log('res >', res);
        }, function (err) {
            console.log(err);
        });
    };
    HomeComponent.prototype.navigateTo = function (data) {
        var dataParams = [data];
        this.route.navigate(dataParams);
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'home-comp',
            templateUrl: 'gms/scripts/home-component/home-component.html',
            styleUrls: ['gms/scripts/home-component/home-component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, http_service_1.HttpService, app_service_1.AppService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;

//# sourceMappingURL=home-component.js.map
