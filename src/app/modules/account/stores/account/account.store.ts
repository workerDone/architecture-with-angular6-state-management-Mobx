import { Injectable } from '@angular/core';
import { observable, action, computed } from 'mobx-angular';

import { TeamsService } from '../../../../modules/teams/services/teams/teams.service';

import { UserTeamModel } from '../../models/user-team/user-team.model';
import { UserTeamAggregatedModel } from '../../models/user-team-aggregated/user-team-aggregated.model';

@Injectable({
  providedIn: 'root'
})
export class AccountStore {

  @observable userTeams: UserTeamModel[];

  constructor(
    private teamsService: TeamsService
  ) { }

  @action setUserTeams(userTeams: UserTeamModel[]) {
    this.userTeams = userTeams;
  }

  @computed get userTeamsAggregated(): UserTeamAggregatedModel[] {
    const userTeams = this.userTeams;
    const teamsInfo = this.teamsService.teamsInfo;

    if (userTeams == null || teamsInfo == null) {
      return [];
    }

    return userTeams.map(userTeam => {
      const teamInfo = teamsInfo[userTeam.name];

      return new UserTeamAggregatedModel({
        userTeam,
        teamInfo
      })
    });
  }
}
