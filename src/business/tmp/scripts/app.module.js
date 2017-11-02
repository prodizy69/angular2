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
var contactus_component_1 = require('./contactus-component/contactus-component');
var landing_component_1 = require('./deal-component/landing-component/landing-component');
var creation_component_1 = require('./deal-component/creation-component/creation-component');
var deal_component_1 = require('./deal-component/deal-component');
var faq_component_1 = require('./faq-component/faq-component');
var howitworks_component_1 = require('./howitworks-component/howitworks-component');
var termsnconds_component_1 = require('./termsnconds-component/termsnconds-component');
var privacypolicy_component_1 = require('./privacypolicy-component/privacypolicy-component');
var careers_component_1 = require('./careers-component/careers-component');
var aboutus_component_1 = require('./aboutus-component/aboutus-component');
var help_component_1 = require('./help-component/help-component');
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require('./app.component');
var home_component_1 = require('./home-component/home-component');
var header_component_1 = require('./header-component/header-component');
var footer_component_1 = require('./footer-component/footer-component');
var business_details_component_1 = require('./business-details/business-details.component');
var login_component_1 = require('./login-component/login-component');
var returns_component_1 = require('./returns-component/returns-component');
var consumer_component_1 = require('./consumer-component/consumer-component');
var tabs_component_1 = require('./tabs-component/tabs-component');
var branch_component_1 = require('./branch-component/branch-component');
var reports_component_1 = require('./reports-component/reports-component');
var app_routes_1 = require('./app.routes');
var mdl_directive_1 = require('./directives/mdl-directive');
var app_service_1 = require('./services/app.service');
var common_1 = require('@angular/common');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule,
                app_routes_1.AppRoutingModule],
            declarations: [app_component_1.AppComponent, mdl_directive_1.MDLDirective,
                home_component_1.HomeComponent,
                header_component_1.HeaderComponent,
                footer_component_1.FooterComponent,
                business_details_component_1.BusinessDetailsComponent,
                login_component_1.LoginComponent,
                returns_component_1.ReturnsComponent,
                deal_component_1.DealComponent,
                creation_component_1.DealCreationComponent,
                landing_component_1.DealLandingComponent,
                consumer_component_1.ConsumerComponent,
                tabs_component_1.TabsComponent,
                branch_component_1.BranchComponent,
                reports_component_1.ReportsComponent,
                help_component_1.HelpComponent,
                aboutus_component_1.AboutusComponent,
                careers_component_1.CareersComponent,
                privacypolicy_component_1.PrivacyComponent,
                termsnconds_component_1.TermsNCondsComponent,
                howitworks_component_1.HowitWorksComponent,
                faq_component_1.FaqComponent,
                contactus_component_1.ContactUsComponent],
            bootstrap: [app_component_1.AppComponent],
            providers: [app_service_1.AppService,
                { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

//# sourceMappingURL=app.module.js.map
