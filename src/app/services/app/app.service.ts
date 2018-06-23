import { Injectable } from '@angular/core';
import { tap, map, mergeMap } from 'rxjs/operators';
import { from } from 'rxjs';
import { observable, action, computed } from 'mobx-angular';

import { Web3Service } from '../../integration/web3/web3.service';
import { AuthService } from '../../core/auth/services/auth/auth.service';
import { ModalWindowService } from '../../core/modal-window/modal-window/modal-window.service';
import { ApiService } from '../../core/api/services/api/api.service';
import { TransfersService } from '../../modules/transfers/services/transfers/transfers.service';
import { UserService } from '../../modules/user/services/user/user.service';

import { AppStore } from '../../stores/app/app.store';

import { LoginRequestModel } from '../../core/auth/models/login-request/login-request.model';
import { TeamAggregatedModel } from '../../modules/teams/models/team-aggregated/team-aggregated.model';
import { PurchaseModel } from '../../models/purchase/purchase.models';
import { TransferModel } from '../../modules/transfers/models/transfer/transfer.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    private web3Service: Web3Service,
    private authService: AuthService,
    private modalWindowService: ModalWindowService,
    private appStore: AppStore,
    private apiService: ApiService,
    private transfersService: TransfersService,
    private userService: UserService
  ) { }

  @action selectTeam(team: TeamAggregatedModel) {
    this.appStore.selectTeam(team);
  }

  @action setTransfersForCurrentTeam(transfers: TransferModel[]) {
    this.transfersService.setTransfersForCurrentTeam(transfers);
  }

  @action sign(params: {
    email: string,
    name: string
  }) {
    return this.web3Service.sign(params);
  }

  @action login(params: {
    email: string,
    name: string,
    signature: string
  }) {
    return this.authService
      .login({
        signature: params.signature,
        email: params.email,
        name: params.name,
        ethAddress: this.web3Service.walltet
      })
      .pipe(
        mergeMap(() =>
          this.userService.getUser()
        ),
        tap(() => {
          this.modalWindowService.moveSignIn();

          if (this.appStore.selectedTeam != null) {
            this.modalWindowService.moveBuy();

            this.transfersService
              .getTransfersForTeam(this.appStore.selectedTeam.team.teamId)
              .subscribe();
          }
        })
      );
  }

  @action buy(id: number) {
    return this.apiService
      .get(`teams/purchase/${id}`)
      .pipe(
        map((purchase) =>
          new PurchaseModel(purchase)
        )
      );
  }

  @action sendTransaction(purchase: PurchaseModel) {
    return this.web3Service
      .sendTransaction({
        value: purchase.price,
        data: purchase.data,
        to: purchase.contract
      });
  }

  @computed get selectedTeam() {
    return this.appStore.selectedTeam;
  }

  @computed get firstThreetransfersForCurrentTeam(): TransferModel[] {
    return this.transfersService.transfersForCurrentTeam.slice(0, 3);
  }

  @computed get transfersForCurrentTeam(): TransferModel[] {
    return this.transfersService.transfersForCurrentTeam;
  }

  @computed get preICOCountdown(): string {
    return '2018-07-15 14:00:00';
  }
}
