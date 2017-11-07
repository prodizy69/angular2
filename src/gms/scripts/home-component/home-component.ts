import { AppService } from './../services/app.service';
import { HttpService } from './../services/http-service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';


@Component({
  selector: 'home-comp',
  templateUrl: 'gms/scripts/home-component/home-component.html',
  styleUrls: ['gms/scripts/home-component/home-component.css']
})
export class HomeComponent {
  playerInfo: any;

  constructor(private route: Router,
    private httpService: HttpService,
    private appService: AppService) {
    this.getPlayerInfo();
    console.log(this.playerInfo);
    let url = this.appService.getServerUril();
    console.log(url);
  }

  getPlayerInfo() {
    let data = 'startDate=2017-10-25 00:00:00&endDate=2017-11-06 00:00:00&accountId=1';

    return this.httpService.request({
      url: 'https://staging-gms.indianrummynetwork.com/redirect.php?name=player',
      method: 'post',
      body: data
    }).subscribe(res => {
      this.playerInfo = res;
      console.log('res >', res);
    },
      err => {
        console.log(err);
      });
  }

  navigateTo(data) {
    let dataParams = [data];
    this.route.navigate(dataParams);
  }

}
