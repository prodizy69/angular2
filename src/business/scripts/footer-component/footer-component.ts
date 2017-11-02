import { Component } from '@angular/core';
import { Router }  from '@angular/router';

@Component({
  selector: 'footer-comp',
  templateUrl: 'business/scripts/footer-component/footer-component.html',
  styleUrls: ['business/scripts/footer-component/footer-component.css']
})
export class FooterComponent {

  constructor(private router: Router ) {
  }
  navigateTo (data) {
    let dataParams = [data];
    this.router.navigate(dataParams);
  }

}
