import { observable } from 'mobx-angular';

import { UserTeamModel } from '../user-team/user-team.model';
import { TeamInfoModel } from '../../../../modules/teams/models/team-info/team-info.model';

export class UserTeamAggregatedModel {

  @observable userTeam: UserTeamModel;
  @observable teamInfo: TeamInfoModel;

  constructor(value: UserTeamAggregatedModel) {
    Object.assign(this, value);
  }
}
