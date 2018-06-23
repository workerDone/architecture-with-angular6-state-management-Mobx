import { observable } from 'mobx-angular';

import { TransferModel } from '../transfer/transfer.model';
import { TeamAggregatedModel } from '../../../../modules/teams/models/team-aggregated/team-aggregated.model';

export class TransferAggregatedModel {

  @observable transferInfo: TransferModel;
  @observable teamAggregated: TeamAggregatedModel;

  constructor(value: TransferAggregatedModel) {
    Object.assign(this, value);
  }
}
