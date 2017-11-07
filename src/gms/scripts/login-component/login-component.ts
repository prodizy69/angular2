import { Router } from '@angular/router';
import { Component } from '@angular/core';
@Component({
    selector: 'login-comp',
    templateUrl: 'src/gms/scripts/login-component/login-component.html',
    styleUrls: ['src/gms/scripts/login-component/login-component.css']
})
export class LoginComponent {

    constructor(private route: Router) { }

    login() {
        this.route.navigate(['gms/home']);
    }

}
