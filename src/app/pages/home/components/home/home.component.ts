import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from "@angular/router";
import { Observable } from 'rxjs';
import { action, computed } from 'mobx-angular';

import { HomeService } from '../../services/home/home.service';

import { TeamsSortByModel } from '../../models/teams-sort-by/teams-sort-by.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isCheked = false;
  isShowSortBy = true;

  constructor(
    private router: Router,
    private homeService: HomeService,
  ) { }

  ngOnInit() {
    this.homeService.setTeamsSortBy(this.homeService.teamsSortByList[1]);

    this.isCheked = this.router.url === '/home/leaderboard';

    this.router.events.subscribe((event) => {
      if(event instanceof NavigationStart) {
        this.isShowSortBy = event.url === '/home/market';
      }
    });
  }

  @action moveLink(e) {
    this.homeService.moveLink(e);
  }

  @action setTeamsSortBy(teamsSortBy: TeamsSortByModel) {
    this.homeService.setTeamsSortBy(teamsSortBy);
  }

  @computed get teamsSortByList(): TeamsSortByModel[] {
    return this.homeService.teamsSortByList;
  }

  @computed get currentTeamsSortBy(): TeamsSortByModel {
    return this.homeService.currentTeamsSortBy;
  }
}
