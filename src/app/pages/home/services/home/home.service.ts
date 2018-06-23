import { Injectable } from '@angular/core';
import { action, computed } from 'mobx-angular';

import { NavigationService } from '../../../../core/navigation/service/navigation.service';
import { Web3Service } from '../../../../integration/web3/web3.service';
import { ModalWindowService } from '../../../../core/modal-window/modal-window/modal-window.service';
import { JwtService } from '../../../../core/auth/jwt/jwt.service';
import { AppService } from '../../../../services/app/app.service';
import { TeamsService } from '../../../../modules/teams/services/teams/teams.service';
import { TransfersService } from '../../../../modules/transfers/services/transfers/transfers.service';

import { HomeStore } from '../../stores/home/home.store';

import { SignatureFnTeamsSortByType } from '../../types/signature-fn-teams-sort-by.type';
import { TeamAggregatedModel } from '../../../../modules/teams/models/team-aggregated/team-aggregated.model';
import { TeamsSortByModel } from '../../models/teams-sort-by/teams-sort-by.model';
import { TransferAggregatedModel } from '../../../../modules/transfers/models/transfer-aggregated/transfer-aggregated.model';
import { tap } from 'rxjs/operators';

@Injectable()
export class HomeService {

  constructor(
    private navigationService: NavigationService,
    private web3Service: Web3Service,
    private modalWindowService: ModalWindowService,
    private jwtService: JwtService,
    private appService: AppService,
    private teamsService: TeamsService,
    private transfersService: TransfersService,
    private homeStore: HomeStore
  ) { }

  @action getTopTransfers() {
    return this.transfersService.getTopTransfers();
  }

  @action moveLink(e) {
    let link = 'home';
 
    link += e.target.checked ? '/leaderboard' : '/market';

    this.navigationService.linkToAddress(link);
  }

  @action setTeamsSortBy(teamsSortBy: TeamsSortByModel) {
    this.homeStore.setTeamsSortBy(teamsSortBy);
  }

  @action buy(teamAggregated: TeamAggregatedModel) {
    this.appService.selectTeam(teamAggregated);

    if (!this.web3Service.isIncludedWeb3 || !this.web3Service.isLogged) {

      this.modalWindowService.moveMetaMask();
    } else if (!this.web3Service.isLogged || !this.jwtService.isPresentToken) {

      this.modalWindowService.moveSignIn();
    } else {
      this.transfersService
        .getTransfersForTeam(teamAggregated.team.teamId)
        .pipe(
          tap(() => {
            this.modalWindowService.moveBuy();
          })
        )
        .subscribe();
    }
  }

  @computed get teamsSortByList(): TeamsSortByModel[] {
    return this.homeStore.teamsSortByList;
  }

  @computed get currentTeamsSortBy(): TeamsSortByModel {
    return this.homeStore.currentTeamsSortBy;
  }

  @computed get teamsAggregated(): TeamAggregatedModel[] {
    return this.homeStore.teamsAggregated;
  }

  @computed get topTransfersAggregated(): TransferAggregatedModel[] {
    return this.transfersService.topTransfersAggregated;
  }
}
