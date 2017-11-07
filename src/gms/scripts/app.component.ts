import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

declare function require(name: string): any;

@Component({
  selector: 'gms-app',
  templateUrl: 'gms/scripts/app.component.html',
  styleUrls: [
    'gms/scripts/app.component.css'
  ]
})
export class AppComponent implements OnInit {
  footerDisplay: boolean = false;
  headerDisplay: boolean = false;

  constructor(private route: Router, private activatedRoute: ActivatedRoute) {
  }
  ngOnInit() {
    this.route.events
      .filter(event => event instanceof NavigationEnd)
      .map(() => this.activatedRoute)
      .map(route => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      })
      .filter(route => route.outlet === 'primary')
      .mergeMap(route => route.data)
      .subscribe((event) => {
        this.footerDisplay = event.footer;
        this.headerDisplay = event.header;
      });
  }
}
