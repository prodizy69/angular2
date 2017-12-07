import { Injectable } from '@angular/core';
import { HttpClient, HttpRequestOptions, HttpHeaders } from '@angular/http';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class HttpService {
    constructor(private http: HttpClient) {

    }

    request(options: HttpRequestOptions): Observable<any> {
        let url = options.url;
        if (options.method = 'post') {
            let headers = new HttpHeaders();
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
            options.headers = headers;
        }
        // return this.http.request(url, options).map(res => {
        //     console.log(res);
        //     res.json();
        // });
        return this.http.post(url, options.body).map(
            res => {
                console.log(res);
            }
        );
    }

}
