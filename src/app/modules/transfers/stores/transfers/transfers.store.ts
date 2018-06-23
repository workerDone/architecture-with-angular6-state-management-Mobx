import { Injectable } from '@angular/core';
import { observable, action, computed } from 'mobx-angular';

import { TeamsService } from '../../../../modules/teams/services/teams/teams.service';

import { TransferModel } from '../../../../modules/transfers/models/transfer/transfer.model';
import { TransferAggregatedModel } from '../../models/transfer-aggregated/transfer-aggregated.model';

@Injectable({
  providedIn: 'root'
})
export class TransfersStore {

  @observable topTransfers: TransferModel[];
  @observable transfersForCurrentTeam: TransferModel[];

  constructor(
    private teamsService: TeamsService
  ) { }

  @action setTopTransfers(transfers: TransferModel[]) {
    this.topTransfers = transfers;
  }

  @action setTransfersForCurrentTeam(transfers: TransferModel[]) {
    this.transfersForCurrentTeam = transfers;
  }

  @computed get topTransfersAggregated(): TransferAggregatedModel[] {
    const topTransfers = this.topTransfers;
    const teamsAggregated = this.teamsService.teamsAggregated;

    if (topTransfers == null || teamsAggregated == null) {
      return [];
    }

    return topTransfers.map(transferInfo => {
      const teamAggregated = teamsAggregated.find((item =>
        item.team.teamId == transferInfo.teamId
      ));

      return new TransferAggregatedModel({
        transferInfo,
        teamAggregated
      })
    });
  }
}
