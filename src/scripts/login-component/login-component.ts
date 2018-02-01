import { HttpService } from './../services/http-service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
@Component({
    selector: 'login-comp',
    templateUrl: 'scripts/login-component/login-component.html',
    styleUrls: ['scripts/login-component/login-component.css']
})
export class LoginComponent {
    file: File;
    dateConfig: any;
    dateVal: any;
    dateValue: any;
    constructor(private route: Router, private service: HttpService) {
        this.dateValue = new Date().toISOString();
        this.dateConfig = {
            enableTime: true,
            onChange: (event) => {
                if (event && event.length) {
                    this.dateVal = <Date>event[0].toISOString();
                    console.log(event);
                }
            }
        };
    }

    login() {
        this.route.navigate(['home']);
    }

    fileSave(event) {
        this.file = event.target.files[0];
    }

}
