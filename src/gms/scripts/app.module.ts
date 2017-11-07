import { LoginComponent } from './login-component/login-component';
import { HttpService } from './services/http-service';
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
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';


import { AppComponent } from './app.component';

@NgModule({
    imports: [BrowserModule,
        AppRoutingModule,
        HttpModule, CommonModule],
    declarations: [AppComponent, MDLDirective,
        HomeComponent,
        ProfileComponent,
        HeaderComponent,
        FooterComponent,
        LoginComponent
    ],
    bootstrap: [AppComponent],
    providers: [AppService, HttpService, { provide: LocationStrategy, useClass: HashLocationStrategy }]
})
export class AppModule {

}
