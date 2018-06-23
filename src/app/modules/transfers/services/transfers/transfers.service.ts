import { Injectable } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { tap } from 'rxjs/operators';
import { action, computed } from 'mobx-angular';

import { TransfersAPIService } from '../transfers-api/transfers-api.service';

import { TransfersStore } from '../../stores/transfers/transfers.store';

import { TransferModel } from '../../models/transfer/transfer.model';
import { TransferAggregatedModel } from '../../models/transfer-aggregated/transfer-aggregated.model';

@Injectable({
  providedIn: 'root'
})
export class TransfersService {

  constructor(
    private transfersAPIService: TransfersAPIService,
    private transfersStore: TransfersStore
  ) { }

  @action getTopTransfers(): Observable<TransferModel[]> {
    return this.transfersAPIService
      .getTopTransfers()
      .pipe(
        tap((transfers) => {
          this.transfersStore.setTopTransfers(transfers);
        })
      );
  }

  @action getTransfersForTeam(teamId: number): Observable<TransferModel[]> {
    return this.transfersAPIService
      .getTransfers(teamId)
      .pipe(
        tap((transfers) => {
          this.setTransfersForCurrentTeam(transfers);
        })
      );
  }

  @action setTransfersForCurrentTeam(transfers: TransferModel[]) {
    this.transfersStore.setTransfersForCurrentTeam(transfers);
  }

  @computed get topTransfersAggregated(): TransferAggregatedModel[] {
    return this.transfersStore.topTransfersAggregated;
  }

  @computed get transfersForCurrentTeam(): TransferModel[] {
    return this.transfersStore.transfersForCurrentTeam;
  }
}
