import { ContactUsComponent } from './contactus-component/contactus-component';
import { DealLandingComponent } from './deal-component/landing-component/landing-component';
import { DealCreationComponent } from './deal-component/creation-component/creation-component';
import { DealComponent } from './deal-component/deal-component';
import { FaqComponent } from './faq-component/faq-component';
import { HowitWorksComponent } from './howitworks-component/howitworks-component';
import { TermsNCondsComponent } from './termsnconds-component/termsnconds-component';
import { PrivacyComponent } from './privacypolicy-component/privacypolicy-component';
import { CareersComponent } from './careers-component/careers-component';
import { AboutusComponent } from './aboutus-component/aboutus-component';
import { HelpComponent } from './help-component/help-component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home-component/home-component';
import { HeaderComponent } from './header-component/header-component';
import { FooterComponent } from './footer-component/footer-component';
import { BusinessDetailsComponent } from './business-details/business-details.component';
import { LoginComponent } from './login-component/login-component';
import { ReturnsComponent } from './returns-component/returns-component';
import { ConsumerComponent } from './consumer-component/consumer-component';
import { TabsComponent } from './tabs-component/tabs-component';
import { BranchComponent } from './branch-component/branch-component';
import { ReportsComponent } from './reports-component/reports-component';
import { AppRoutingModule } from './app.routes';
import { MDLDirective } from './directives/mdl-directive';
import { AppService } from './services/app.service';
import { HashLocationStrategy , LocationStrategy } from '@angular/common';

@NgModule({
    imports: [ BrowserModule,
    AppRoutingModule ],
    declarations: [ AppComponent, MDLDirective,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    BusinessDetailsComponent,
    LoginComponent,
    ReturnsComponent,
    DealComponent,
    DealCreationComponent,
    DealLandingComponent,
    ConsumerComponent,
    TabsComponent,
    BranchComponent,
    ReportsComponent,
    HelpComponent,
    AboutusComponent,
    CareersComponent,
    PrivacyComponent,
    TermsNCondsComponent,
    HowitWorksComponent,
    FaqComponent,
    ContactUsComponent ],
    bootstrap: [ AppComponent ],
    providers: [ AppService,
        { provide: LocationStrategy, useClass: HashLocationStrategy} ]
})
export class AppModule {

}
