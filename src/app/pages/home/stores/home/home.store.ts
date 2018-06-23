import { Injectable } from '@angular/core';
import { observable, action, computed } from 'mobx-angular';

import { TeamsService } from '../../../../modules/teams/services/teams/teams.service';

import { SortBy } from '../../enums/filter-types.enum';
import { TeamsSortByModel } from '../../models/teams-sort-by/teams-sort-by.model';
import { SignatureFnTeamsSortByType } from '../../types/signature-fn-teams-sort-by.type';
import { TeamAggregatedModel } from '../../../../modules/teams/models/team-aggregated/team-aggregated.model';
import { TransferModel } from '../../../../modules/transfers/models/transfer/transfer.model';

@Injectable({
  providedIn: 'root'
})
export class HomeStore {

  @observable currentTeamsSortBy: TeamsSortByModel;
  @observable teamsSortByList: TeamsSortByModel[] = [
    new TeamsSortByModel({ name: 'price', fn: this.teamsSortByPrice }),
    new TeamsSortByModel({ name: 'name', fn: this.teamsSortByName })
  ];

  constructor(
    private teamsService: TeamsService
  ) { }

  @action setTeamsSortBy(teamsSortBy: TeamsSortByModel) {
    this.currentTeamsSortBy = teamsSortBy;
  }

  @computed get teamsAggregated(): TeamAggregatedModel[] {
    if (this.currentTeamsSortBy == null) {
      return this.teamsService.teamsAggregated;
    }

    const teamsAggregation = this.teamsService.teamsAggregated.sort(this.currentTeamsSortBy.fn);

    return teamsAggregation;
  }

  private teamsSortByPrice(a: TeamAggregatedModel, b: TeamAggregatedModel): number {
    if (a.team.price < b.team.price) {
      return -1;
    }

    if (a.team.price > b.team.price) {
      return 1;
    }

    return 0;
  }

  private teamsSortByName(a: TeamAggregatedModel, b: TeamAggregatedModel): number {
    if (a.teamInfo.fullName < b.teamInfo.fullName) {
      return -1;
    }

    if (a.teamInfo.fullName > b.teamInfo.fullName) {
      return 1;
    }

    return 0;
  }
}
