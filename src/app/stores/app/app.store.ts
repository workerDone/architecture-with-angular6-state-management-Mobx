import { Injectable } from '@angular/core';
import { observable, action } from 'mobx-angular';

import { TeamAggregatedModel } from '../../modules/teams/models/team-aggregated/team-aggregated.model';

@Injectable({
  providedIn: 'root'
})
export class AppStore {

  @observable selectedTeam: TeamAggregatedModel;

  constructor() { }

  @action selectTeam(team: TeamAggregatedModel) {
    this.selectedTeam = team;
  }
}
