import { Injectable } from '@angular/core';
import { observable, action, computed } from 'mobx-angular';

import { TeamsService } from '../../../../modules/teams/services/teams/teams.service';

import { TeamsGroupsIdsModel } from '../../models/teams-groups-ids/teams-groups-ids';
import { TeamsGroupsModel } from '../../models/teams-groups/teams-groups.model';

@Injectable({
  providedIn: 'root'
})
export class ResultsStore {

  @observable teamsGroupsIds: TeamsGroupsIdsModel;

  constructor(
    private teamsService: TeamsService
  ) { }

  @action setTeamsGroupsIds(teamsGroupsIds: TeamsGroupsIdsModel) {
    this.teamsGroupsIds = teamsGroupsIds;
  }

  @computed get teamsGroupsPrepared(): TeamsGroupsModel {
    const teamsGroups: TeamsGroupsModel = {}; 

    for (let groupKey in this.teamsGroupsIds) {
      const group = this.teamsGroupsIds[groupKey];

      group.forEach((teamIds, index) => {
        const team = this.teamsService.teamsAggregated.find((item) =>
          teamIds != null && item.team.teamId === Number(teamIds)
        );

        if (teamsGroups[groupKey] == null) {
          teamsGroups[groupKey] = [];
        }

        teamsGroups[groupKey][index] = team;
      });
    }

    return teamsGroups;
  }
}
