import { Component, OnInit } from '@angular/core';
import { action, computed } from 'mobx-angular';

import { HomeService } from '../../services/home/home.service';

import { TeamAggregatedModel } from '../../../../modules/teams/models/team-aggregated/team-aggregated.model';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.scss']
})
export class MarketComponent implements OnInit {

  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit() { }

  @action buy(team: TeamAggregatedModel) {
    this.homeService.buy(team);
  }

  @computed get teamsAggregated(): TeamAggregatedModel[] {
    return this.homeService.teamsAggregated;
  }
}
