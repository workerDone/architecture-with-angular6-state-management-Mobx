import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ApiService } from '../../../../core/api/services/api/api.service';

import { TeamsInfoType } from '../../types/teams-info/teams-info.type';

import { TeamModel } from '../../models/team/team.model';
import { TeamInfoModel } from '../../models/team-info/team-info.model';

@Injectable({
  providedIn: 'root'
})
export class TeamsApiService {

  constructor(
    private apiService: ApiService
  ) { }

  getTeams(): Observable<TeamModel[]> {
    return this.apiService
      .get('teams')
      .pipe(
        map((teams: TeamModel[]) => {
          if (teams == null && Array.isArray(teams)) {
            throw new Error('IS_EMPTY');
          }

          return teams.map(team =>
            new TeamModel(team)
          )
        })
      );
  }

  getTeamsInfo(): Observable<TeamsInfoType> {
    return this.apiService
      .get('teams-info')
      .pipe(
        map((teamsInfo: TeamsInfoType) => {
          if (teamsInfo == null) {
            throw new Error('IS_EMPTY');
          }

          for (let key in teamsInfo) {
            teamsInfo[key] = new TeamInfoModel(teamsInfo[key]);
          }

          return teamsInfo;
        })
      );
  }
}
