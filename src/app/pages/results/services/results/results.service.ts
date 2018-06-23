import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { action, computed } from 'mobx-angular';

import { ResultsApiService } from '../results-api/results-api.service';

import { ResultsStore } from '../../stores/results/results.store';

import { TeamsGroupsModel } from '../../models/teams-groups/teams-groups.model';

@Injectable({
  providedIn: 'root'
})
export class ResultsService {

  constructor(
    private resultsApiService: ResultsApiService,
    private resultsStore: ResultsStore
  ) { }

  @action getTeamGroups() {
    return this.resultsApiService
      .getTeamGroups()
      .pipe(
        tap((teamsGroupsIds) => {
          this.resultsStore.setTeamsGroupsIds(teamsGroupsIds);
        })
      );
  }

  @computed get teamsGroupsPrepared(): TeamsGroupsModel {
    return this.resultsStore.teamsGroupsPrepared;
  }
}
