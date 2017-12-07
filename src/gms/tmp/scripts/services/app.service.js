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
var http_1 = require('@angular/http');
var AppService = (function () {
    function AppService(http) {
        this.http = http;
    }
    AppService.prototype.getServerUril = function () {
        var _this = this;
        this.http.get('gms/config/configurations.json').map(function (res) {
            _this.serverUrl = res.json().url;
            return _this.serverUrl;
        });
    };
    AppService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.HttpClient !== 'undefined' && http_1.HttpClient) === 'function' && _a) || Object])
    ], AppService);
    return AppService;
    var _a;
}());
exports.AppService = AppService;

//# sourceMappingURL=app.service.js.map
