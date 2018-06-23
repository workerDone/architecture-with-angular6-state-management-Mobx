import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { action, computed } from 'mobx-angular';

import { UserApiService } from '../user-api/user-api.service';

import { UserStore } from '../../stores/user/user.store';

import { UserModel } from '../../models/user/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private userApiService: UserApiService,
    private userStore: UserStore
  ) { }

  @action getUser(): Observable<UserModel> {
    return this.userApiService
      .getUser()
      .pipe(
        map(this.prepareUser),
        tap(this.updateUserInStore)
      );
  }

  @action updateUser(user: UserModel): Observable<UserModel> {
    return this.userApiService
      .updateUser(user)
      .pipe(
        map(this.prepareUser),
        tap(this.updateUserInStore)
      );
  }

  @computed get user(): UserModel {
    return this.userStore.user;
  }

  private prepareUser = (user: UserModel) => {
    return new UserModel(user);
  }

  private updateUserInStore = (user) => {
    this.userStore.setUser(user);
  }
}
