import { Component, OnInit } from '@angular/core';

import { computed } from 'mobx-angular';

import { AchievementsIncentivesService } from '../../services/achievements-incentives/achievements-incentives.service';

@Component({
  selector: 'app-achievements-incentives',
  templateUrl: './achievements-incentives.component.html',
  styleUrls: ['./achievements-incentives.component.scss']
})
export class AchievementsIncentivesComponent implements OnInit {

  constructor(
    private achievementsIncentivesService: AchievementsIncentivesService
  ) { }

  ngOnInit() {
      this.achievementsIncentivesService.init();
  }

  @computed get isTournamentEnded() {
    return this.achievementsIncentivesService.isTournamentEnded;
  }

  @computed get achievementsIncentives() {
    return this.achievementsIncentivesService.achievementsIncentives;
  }

  @computed get mostProfitableBiddersFormatted() {
    return this.achievementsIncentivesService.mostProfitableBiddersFormatted;
  }
}
