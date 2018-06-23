import { Injectable } from '@angular/core';
import { observable, action } from 'mobx-angular';

import { UserModel } from '../../models/user/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserStore {

  @observable user: UserModel;

  constructor() { }

  @action setUser(user: UserModel) {
    this.user = user;
  }
}
