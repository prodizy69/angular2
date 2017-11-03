import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { MDLDirective } from './directives/mdl-directive';
import { AppService } from './services/app.service';

import { AppRoutingModule } from './app.routes';

import { FooterComponent } from './footer-component/footer-component';
import { HeaderComponent } from './header-component/header-component';
import { ProfileComponent } from './profile-component/profile-component';
import { HomeComponent } from './home-component/home-component';

import { AppComponent } from './app.component';

@NgModule({
    imports: [BrowserModule,
        AppRoutingModule],
    declarations: [AppComponent, MDLDirective,
        HomeComponent,
        ProfileComponent,
        HeaderComponent,
        FooterComponent
    ],
    bootstrap: [AppComponent],
    providers: [AppService, { provide: LocationStrategy, useClass: HashLocationStrategy }]
})
export class AppModule {

}
