import { Injectable } from '@angular/core';
import { forkJoin } from 'rxjs';
import { tap } from 'rxjs/operators';
import { action, computed } from 'mobx-angular';

import { AppService } from '../../../../services/app/app.service';
import { AccountService } from '../../../../modules/account/services/account/account.service';
import { AchievementsIncentivesApiService } from '../achievements-incentives-api/achievements-incentives-api.service';

import { AchievementsIncentivesStore } from '../../stores/achievements-incentives/achievements-incentives.store';

@Injectable({
  providedIn: 'root'
})
export class AchievementsIncentivesService {

  constructor(
    private appService: AppService,
    private accountService: AccountService,
    private achievementsIncentivesApiService: AchievementsIncentivesApiService,
    private achievementsIncentivesStore: AchievementsIncentivesStore
  ) { }

  @action init() {
    if (this.isTournamentEnded) {
      this.getInitData();
    }
  }

  @action getInitData() {
    this.getResult().subscribe();
    this.getUserTeams().subscribe();
  }

  @action getUserTeams() {
    return this.accountService.getUserTeams();
  }

  @action getResult() {
    return this.achievementsIncentivesApiService
      .getResults()
      .pipe(
        tap((result) => {
          this.achievementsIncentivesStore.setResult(result);
        })
      )
  }

  @computed get achievementsIncentives() {
    return this.achievementsIncentivesStore.achievementsIncentives;
  }

  @computed get mostProfitableBiddersFormatted() {
    return this.achievementsIncentivesStore.mostProfitableBiddersFormatted;
  }

  @computed get isTournamentEnded() {
    const currentDate = new Date();
    const preICOCountdownDate = new Date(this.appService.preICOCountdown);

    preICOCountdownDate.setDate(preICOCountdownDate.getDate() + 1);

    return currentDate > preICOCountdownDate;
  }
}
