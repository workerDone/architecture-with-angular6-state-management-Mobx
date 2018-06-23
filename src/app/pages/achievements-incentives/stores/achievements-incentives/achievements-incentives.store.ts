import { Injectable } from '@angular/core';
import { observable, action, computed } from 'mobx-angular';

import { TeamsService } from '../../../../modules/teams/services/teams/teams.service';
import { AccountService } from '../../../../modules/account/services/account/account.service';

import { achievementsIncentivesDictionary } from '../../dictionaries/achievements-incentives.dictionary';

import { AchievementsIncentivesResponseModel } from '../../models/achievements-incentives-response/achievements-incentives-response.model';
import { AchievementsIncentivesModel } from '../../models/achievements-incentives/achievements-incentives.model';

import { TeamAggregatedModel } from '../../../../modules/teams/models/team-aggregated/team-aggregated.model';

@Injectable({
  providedIn: 'root'
})
export class AchievementsIncentivesStore {

  @observable result: AchievementsIncentivesResponseModel;

  constructor(
    private teamsService: TeamsService,
    private accountService: AccountService
  ) { }

  @action setResult(result: AchievementsIncentivesResponseModel) {
    this.result = result;
  }

  @computed get achievementsIncentives(): AchievementsIncentivesModel[] {
    const result = this.result;
    const teamsAggregated = this.teamsService.teamsAggregated;

    if (result == null || teamsAggregated.length === 0) {
      return [];
    }

    return result.winnerIds.map((winnerId, index) => {
      const isMy = this.accountService.userTeamsAggregated
        .find(item =>
          item.userTeam.teamId == winnerId
        ) != null;

      const info = achievementsIncentivesDictionary[index];

      const teamAggregated = teamsAggregated.find(item =>
        item.team.teamId == winnerId
      );

      return new AchievementsIncentivesModel({
        isMy,
        info,
        teamAggregated
      })
    });
  }

  @computed get mostProfitableBiddersFormatted(): string[] {
    if (this.result == null) {
      return [];
    }

    return this.result.mostProfitableBiddersFormatted;
  }
}
