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
    constructor(private route: Router, private service: HttpService) { }

    login() {
        this.route.navigate(['home']);
    }

    fileSave(event) {
        this.file = event.target.files[0];
    }

}
