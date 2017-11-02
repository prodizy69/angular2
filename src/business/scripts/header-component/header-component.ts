import { Router, ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'header-comp',
  templateUrl: 'business/scripts/header-component/header-component.html',
  styleUrls: ['business/scripts/header-component/header-component.css']
})
export class HeaderComponent {
  showLoginModal: boolean = false;
  route: Router;
  activatedRoute: ActivatedRoute;
  footerDisplay: boolean = true;

  constructor(route: Router, _route: ActivatedRoute) {
    this.route = route;
    // this.route.events.subscribe(event => {
    //   if (event.url !== 'business') {
    //     this.footerDisplay = false;
    //   }
    // });
    this.activatedRoute = _route;
    this.activatedRoute.params.subscribe(params => {
      console.log('Params from app :: ', params);
    });
  }

  openModal() {
    this.showLoginModal = !this.showLoginModal;
  }

  navigateTo(data) {
    let dataParams = [data];
    this.route.navigate(dataParams);
  }

}
