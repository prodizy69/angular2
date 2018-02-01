import { CommonModule, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppService } from './services/app.service';
import { HttpService } from './services/http-service';

import { LoginComponent } from './login-component/login-component';
import { FooterComponent } from './footer-component/footer-component';
import { HeaderComponent } from './header-component/header-component';
import { ProfileComponent } from './profile-component/profile-component';
import { HomeComponent } from './home-component/home-component';

import { AppRoutingModule } from './app.routes';

import { AppComponent } from './app.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { TestModule } from './test/test.module';

@NgModule({
    imports: [BrowserModule,
        AppRoutingModule, FormsModule, ReactiveFormsModule,
        HttpClientModule, CommonModule, TestModule],
    declarations: [AppComponent,
        HomeComponent,
        ProfileComponent,
        HeaderComponent,
        FooterComponent,
        LoginComponent,
        DatePickerComponent
,
    DatePickerComponent
],
    bootstrap: [AppComponent],
    providers: [AppService, HttpService, { provide: LocationStrategy, useClass: HashLocationStrategy }]
})
export class AppModule {

}
