import { Component, OnInit } from '@angular/core';
import { action, computed } from 'mobx-angular';

import { HomeService } from '../../services/home/home.service';

import { TeamAggregatedModel } from '../../../../modules/teams/models/team-aggregated/team-aggregated.model';

class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}
@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.scss']
})
export class MarketComponent implements OnInit {

  text: string;
  num: number;
  myIdentity;
  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit() {
    this.text = this.identity<string>('hello');
    this.num = this.identity<number>(42);
    this.myIdentity = new GenericNumber<number>();
    this.myIdentity.zeroValue = 9;
    this.myIdentity.add = (x, y) => x + y;

    console.log(this.myIdentity.add(this.myIdentity.zeroValue, 6));
    console.log(typeof this.text, typeof this.num);
   }

  @action buy(team: TeamAggregatedModel) {
    this.homeService.buy(team);
  }

  @computed get teamsAggregated(): TeamAggregatedModel[] {
    return this.homeService.teamsAggregated;
  }

  identity<T>(arg: T): T {
    return arg;
  }

}
