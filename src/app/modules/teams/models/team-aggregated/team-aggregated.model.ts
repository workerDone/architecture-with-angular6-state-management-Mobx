import { observable } from 'mobx-angular';

import { TeamModel } from '../team/team.model';
import { TeamInfoModel } from '../team-info/team-info.model';

export class TeamAggregatedModel {

  @observable team: TeamModel;
  @observable teamInfo: TeamInfoModel;

  constructor(value: TeamAggregatedModel) {
    Object.assign(this, value);
  }
}
