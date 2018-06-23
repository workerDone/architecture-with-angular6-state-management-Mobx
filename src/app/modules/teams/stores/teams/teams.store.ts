import { Injectable } from '@angular/core';
import { observable, action, computed } from 'mobx-angular';

import { TeamModel } from '../../models/team/team.model';
import { TeamAggregatedModel } from '../../models/team-aggregated/team-aggregated.model';
import { TeamsInfoType } from '../../types/teams-info/teams-info.type';

@Injectable({
  providedIn: 'root'
})
export class TeamsStore {

  @observable teams: TeamModel[];
  @observable teamsInfo: TeamsInfoType;

  constructor() { }

  @action seTeams(teams: TeamModel[]) {
    this.teams = teams;
  }

  @action seTeamsInfo(teamsInfo: TeamsInfoType) {
    this.teamsInfo = teamsInfo;
  }

  @computed get teamsAggregated(): TeamAggregatedModel[] {
    const teams = this.teams;
    const teamsInfo = this.teamsInfo;

    if (teams == null || teamsInfo == null) {
      return [];
    }

    return teams.map(team => {
      const teamInfo = teamsInfo[team.name];

      return new TeamAggregatedModel({
        team,
        teamInfo
      })
    });
  }
}
