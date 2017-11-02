import { DealComponent } from './deal-component/deal-component';
import { ContactUsComponent } from './contactus-component/contactus-component';
import { HelpComponent } from './help-component/help-component';
import { TermsNCondsComponent } from './termsnconds-component/termsnconds-component';
import { PrivacyComponent } from './privacypolicy-component/privacypolicy-component';
import { CareersComponent } from './careers-component/careers-component';
import { HowitWorksComponent } from './howitworks-component/howitworks-component';
import { FaqComponent } from './faq-component/faq-component';
import { AboutusComponent } from './aboutus-component/aboutus-component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home-component/home-component';
import { BusinessDetailsComponent } from './business-details/business-details.component';
import { ReturnsComponent } from './returns-component/returns-component';
import { ConsumerComponent } from './consumer-component/consumer-component';
import { BranchComponent } from './branch-component/branch-component';
import { ReportsComponent } from './reports-component/reports-component';

const routes: Routes = [
  { path: '', redirectTo: 'business', pathMatch: 'full' },
  { path: 'business', component: HomeComponent , data: {footer: true } },
  { path: 'business/deal', component: DealComponent, data: { footer: false } },
  { path: 'business/details', component: BusinessDetailsComponent , data: { footer: false }},
  { path: 'business/returns', component: ReturnsComponent , data: { footer: false }},
  { path: 'business/consumer', component: ConsumerComponent , data: { footer: false }},
  { path: 'business/branch', component: BranchComponent, data: { footer: false }},
  { path: 'business/reports', component: ReportsComponent , data: { footer: false }},
  { path: 'business/aboutus', component: AboutusComponent, data: { footer: true }},
  { path: 'business/faq', component: FaqComponent, data: {footer: true}},
  { path: 'business/howitworks', component: HowitWorksComponent, data: { footer: true }},
  { path: 'business/careers', component: CareersComponent, data: { footer: true }},
  { path: 'business/privacy', component: PrivacyComponent, data: { footer: true }},
  { path: 'business/terms', component: TermsNCondsComponent, data: { footer: true }},
  { path: 'business/help', component: HelpComponent, data: {footer: true }},
  { path: 'business/contactus', component: ContactUsComponent, data: { footer: true }}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
