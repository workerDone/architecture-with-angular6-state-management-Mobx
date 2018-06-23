import { Injectable } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { tap } from 'rxjs/operators';
import { action, computed } from 'mobx-angular';

import { TeamsApiService } from '../teams-api/teams-api.service';
import { TeamsStore } from '../../stores/teams/teams.store';

import { TeamModel } from '../../models/team/team.model';
import { TeamInfoModel } from '../../models/team-info/team-info.model';
import { TeamAggregatedModel } from '../../models/team-aggregated/team-aggregated.model';
import { TeamsInfoType } from '../../types/teams-info/teams-info.type';

@Injectable()
export class TeamsService {

  constructor(
    private teamsApiService: TeamsApiService,
    private teamsStore: TeamsStore,
  ) { }

  @action initLoad() {
    return forkJoin(
      this.getTeams(),
      this.getTeamsInfo()
    );
  }

  @action getTeams(): Observable<TeamModel[]> {
    return this.teamsApiService
      .getTeams()
      .pipe(
        tap((teams) => {
          this.teamsStore.seTeams(teams);
        })
      );
  }

  @action getTeamsInfo(): Observable<TeamsInfoType> {
    return this.teamsApiService
      .getTeamsInfo()
      .pipe(
        tap((teamsInfo) => {
          this.teamsStore.seTeamsInfo(teamsInfo);
        })
      );
  }

  @computed get teamsAggregated(): TeamAggregatedModel[] {
    return this.teamsStore.teamsAggregated;
  }

  @computed get teamsInfo(): TeamsInfoType {
    return this.teamsStore.teamsInfo;
  }
}
