import { Router } from '@angular/router';
import { Component } from '@angular/core';


@Component({
  selector: 'home-comp',
  templateUrl: 'gms/scripts/home-component/home-component.html',
  styleUrls: ['gms/scripts/home-component/home-component.css']
})
export class HomeComponent {
  constructor(private route: Router) { }

  navigateTo(data) {
    let dataParams = [data];
    this.route.navigate(dataParams);
  }

}
