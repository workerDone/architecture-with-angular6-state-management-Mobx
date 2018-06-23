import { Injectable } from '@angular/core';
import { observable, action, computed } from 'mobx-angular';

@Injectable()
export class ModalWindowService {

  @observable metaMask: boolean;
  @observable signIn: boolean;
  @observable afterBuy: boolean;
  @observable buy: boolean;
  @observable afterSaveUserSuccess: boolean;
  @observable afterSaveUserError: boolean;

  constructor() { }

  @action moveMetaMask() {
    this.metaMask = !this.metaMask;
  }

  @action moveSignIn() {
    this.signIn = !this.signIn;
  }

  @action moveAfrerBuy() {
    this.afterBuy = !this.afterBuy;
  }

  @action moveBuy() {
    this.buy = !this.buy;
  }

  @action moveAfterSaveUserSuccess() {
    this.afterSaveUserSuccess = !this.afterSaveUserSuccess;
  }

  @action moveAfterSaveUserError() {
    this.afterSaveUserError = !this.afterSaveUserError;
  }
}
