import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppService {
    serverUrl: string;

    constructor(private http: HttpClient) {
    }

    getServerUril() {
        this.http.get('config/configurations.json').map(res => {
            this.serverUrl = res['url'];
            return this.serverUrl;
        });
    }
}
