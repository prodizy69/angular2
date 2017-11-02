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
var deal_component_1 = require('./deal-component/deal-component');
var contactus_component_1 = require('./contactus-component/contactus-component');
var help_component_1 = require('./help-component/help-component');
var termsnconds_component_1 = require('./termsnconds-component/termsnconds-component');
var privacypolicy_component_1 = require('./privacypolicy-component/privacypolicy-component');
var careers_component_1 = require('./careers-component/careers-component');
var howitworks_component_1 = require('./howitworks-component/howitworks-component');
var faq_component_1 = require('./faq-component/faq-component');
var aboutus_component_1 = require('./aboutus-component/aboutus-component');
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var home_component_1 = require('./home-component/home-component');
var business_details_component_1 = require('./business-details/business-details.component');
var returns_component_1 = require('./returns-component/returns-component');
var consumer_component_1 = require('./consumer-component/consumer-component');
var branch_component_1 = require('./branch-component/branch-component');
var reports_component_1 = require('./reports-component/reports-component');
var routes = [
    { path: '', redirectTo: 'business', pathMatch: 'full' },
    { path: 'business', component: home_component_1.HomeComponent, data: { footer: true } },
    { path: 'business/deal', component: deal_component_1.DealComponent, data: { footer: false } },
    { path: 'business/details', component: business_details_component_1.BusinessDetailsComponent, data: { footer: false } },
    { path: 'business/returns', component: returns_component_1.ReturnsComponent, data: { footer: false } },
    { path: 'business/consumer', component: consumer_component_1.ConsumerComponent, data: { footer: false } },
    { path: 'business/branch', component: branch_component_1.BranchComponent, data: { footer: false } },
    { path: 'business/reports', component: reports_component_1.ReportsComponent, data: { footer: false } },
    { path: 'business/aboutus', component: aboutus_component_1.AboutusComponent, data: { footer: true } },
    { path: 'business/faq', component: faq_component_1.FaqComponent, data: { footer: true } },
    { path: 'business/howitworks', component: howitworks_component_1.HowitWorksComponent, data: { footer: true } },
    { path: 'business/careers', component: careers_component_1.CareersComponent, data: { footer: true } },
    { path: 'business/privacy', component: privacypolicy_component_1.PrivacyComponent, data: { footer: true } },
    { path: 'business/terms', component: termsnconds_component_1.TermsNCondsComponent, data: { footer: true } },
    { path: 'business/help', component: help_component_1.HelpComponent, data: { footer: true } },
    { path: 'business/contactus', component: contactus_component_1.ContactUsComponent, data: { footer: true } }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;

//# sourceMappingURL=app.routes.js.map
