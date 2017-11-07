import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class AppService {
    serverUrl: string;

    constructor(private http: Http) {


    }

    getServerUril() {
        this.http.get('gms/config/configurations.json').map(res => {
            this.serverUrl = res.json().url;
            return this.serverUrl;
        });
    }
}
