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
var http_1 = require('@angular/common/http');
var interceptor_1 = require('./services/interceptor');
var login_component_1 = require('./login-component/login-component');
var http_service_1 = require('./services/http-service');
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var mdl_directive_1 = require('./directives/mdl-directive');
var app_service_1 = require('./services/app.service');
var app_routes_1 = require('./app.routes');
var footer_component_1 = require('./footer-component/footer-component');
var header_component_1 = require('./header-component/header-component');
var profile_component_1 = require('./profile-component/profile-component');
var home_component_1 = require('./home-component/home-component');
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var app_component_1 = require('./app.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule,
                app_routes_1.AppRoutingModule, forms_1.FormsModule, forms_1.ReactiveFormsModule,
                http_1.HttpClientModule, common_1.CommonModule],
            declarations: [app_component_1.AppComponent, mdl_directive_1.MDLDirective,
                home_component_1.HomeComponent,
                profile_component_1.ProfileComponent,
                header_component_1.HeaderComponent,
                footer_component_1.FooterComponent,
                login_component_1.LoginComponent
            ],
            bootstrap: [app_component_1.AppComponent],
            providers: [app_service_1.AppService, http_service_1.HttpService, interceptor_1.InterceptorService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

//# sourceMappingURL=app.module.js.map
