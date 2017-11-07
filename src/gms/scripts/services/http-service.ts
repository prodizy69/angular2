import { Injectable } from '@angular/core';
import { Http, RequestOptionsArgs, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class HttpService {
    constructor(private http: Http) {

    }

    request(options: RequestOptionsArgs): Observable<any> {
        let url = options.url;
        if (options.method = 'post') {
            options.headers = new Headers();
            options.headers.append('Content-Type', 'application/x-www-form-urlencoded');
        }
        return this.http.request(url, options).map(res => {
            console.log(res);
            res.json();
        });
    }

}
