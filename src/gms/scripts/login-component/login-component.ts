import { InterceptorService } from './../services/interceptor';
import { HttpService } from './../services/http-service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
@Component({
    selector: 'login-comp',
    templateUrl: 'src/gms/scripts/login-component/login-component.html',
    styleUrls: ['src/gms/scripts/login-component/login-component.css']
})
export class LoginComponent {
    file: File;
    constructor(private route: Router, private service: HttpService,
    private interceptor: InterceptorService) { }

    login() {
        let formData = new FormData();
        formData.append('file', this.file);
        formData.append('name', 'lenin');
        this.service.request({
            method: 'post',
            url: 'http://localhost:8080/files',
            body: formData
        }).subscribe(
            res => {
                console.log(res);
            }
            );
        this.route.navigate(['gms/home']);
    }

    fileSave(event) {
        this.file = event.target.files[0];
    }

}
