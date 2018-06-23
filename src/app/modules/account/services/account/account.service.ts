import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { action, computed } from 'mobx-angular';

import { NavigationService } from '../../../../core/navigation/service/navigation.service';
import { Web3Service } from '../../../../integration/web3/web3.service';
import { ModalWindowService } from '../../../../core/modal-window/modal-window/modal-window.service';
import { JwtService } from '../../../../core/auth/jwt/jwt.service';
import { TeamsService } from '../../../../modules/teams/services/teams/teams.service';
import { UserService } from '../../../../modules/user/services/user/user.service';
import { AccountApiService } from '../account-api/account-api.service';
import { AccountStore } from '../../stores/account/account.store';

import { TeamAggregatedModel } from '../../../../modules/teams/models/team-aggregated/team-aggregated.model';
import { UserModel } from '../../../../modules/user/models/user/user.model';
import { getDefaultService } from 'selenium-webdriver/chrome';

import { UserTeamModel } from '../../models/user-team/user-team.model';

@Injectable()
export class AccountService {

  constructor(
    private navigationService: NavigationService,
    private modalWindowService: ModalWindowService,
    private web3Service: Web3Service,
    private jwtService: JwtService,
    private teamsService: TeamsService,
    private userService: UserService,
    private accountApiService: AccountApiService,
    private accountStore: AccountStore
  ) { }

  logOut() {
    this.jwtService.destroyToken();
    this.navigationService.logOut();
  }

  moveLink(e) {
    let link = 'account';
      link += e.target.checked ? '/settings' : '/country';

      this.navigationService.linkToAddress(link);
  }

  checkToAccount() {
    if (!this.jwtService.isPresentToken) {
      if (!this.web3Service.isIncludedWeb3 || !this.web3Service.isLogged) {
        this.modalWindowService.moveMetaMask();
      } else {
        this.moveSignIn();
      }

      return false;
    }

    return true;
  }

  @action getUserTeams() {
    return this.accountApiService
      .getUserTeams()
      .pipe(
        map((userTeams) =>
          userTeams.map(userTeam =>
            new UserTeamModel(userTeam)
          )
        ),
        tap((userTeams) => {
          this.accountStore.setUserTeams(userTeams);
        })
      )
  }

  @action moveSignIn() {
    this.modalWindowService.moveSignIn();
  }

  @action getUser(): Observable<UserModel> {
    return this.userService.getUser();
  }

  @action updateUser(user: UserModel): Observable<UserModel> {
    return this.userService.updateUser(user);
  }

  @action destroyToken() {
    this.jwtService.destroyToken();
  }

  get isLogged(): boolean {
    return this.jwtService.isPresentToken;
  }

  @computed get userTeamsAggregated() {
    return this.accountStore.userTeamsAggregated;
  }

  @computed get user(): UserModel {
    return this.userService.user;
  }
}
