import { observable } from 'mobx-angular';

import { AchievementsIncentivesInfo } from '../achievements-incentives-info/achievements-incentives-info';
import { TeamAggregatedModel } from '../../../../modules/teams/models/team-aggregated/team-aggregated.model';

export class AchievementsIncentivesModel {

  @observable isMy: boolean;
  @observable info: AchievementsIncentivesInfo;
  @observable teamAggregated: TeamAggregatedModel;

  constructor(value: AchievementsIncentivesModel) {
    Object.assign(this, value);
  }
}
