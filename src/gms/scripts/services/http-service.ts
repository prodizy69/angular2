import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
@Injectable()
export class HttpService {
    constructor(private http: HttpClient) { }

    request(options: any): Observable<any> {
        let url = options.url;
        if (options.method === 'post') {
            return this.http.post(url, options.body, {
                headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
            });

        }
    }
}
