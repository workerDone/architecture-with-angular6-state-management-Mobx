import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ApiService } from '../../../../core/api/services/api/api.service';

import { TransferModel } from '../../models/transfer/transfer.model';

@Injectable({
  providedIn: 'root'
})
export class TransfersAPIService {

  constructor(
    private apiService: ApiService
  ) { }

  getTopTransfers(): Observable<TransferModel[]> {
    return this.apiService
      .get('transfers/top')
      .pipe(
        map((transfers: TransferModel[]) => {
          if (transfers == null && Array.isArray(transfers)) {
            throw new Error('IS_EMPTY');
          }

          return transfers.map(team =>
            new TransferModel(team)
          )
        })
      );
  }

  getTransfers(teamId: number): Observable<TransferModel[]> {
    return this.apiService
      .get(`transfers/team/${teamId}`)
      .pipe(
        map((transfers: TransferModel[]) => {
          if (transfers == null && Array.isArray(transfers)) {
            throw new Error('IS_EMPTY');
          }

          return transfers.map(team =>
            new TransferModel(team)
          )
        })
      );
  }
}
