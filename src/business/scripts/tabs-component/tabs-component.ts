import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'tabs-component',
  templateUrl: 'business/scripts/tabs-component/tabs-component.html',
  styleUrls: ['business/scripts/tabs-component/tabs-component.css']
})
export class TabsComponent {
  route: Router;
  constructor ( router: Router) {
    this.route = router;
  }
  navigateTo (data) {
    let dataParams = [data];
    this.route.navigate(dataParams);
  }

}
