import { Injectable } from '@angular/core';
import { observable, action, computed } from 'mobx-angular';

@Injectable()
export class JwtService {

  constructor() { }

  @observable token: String;

  @action init() {
    this.token = this.getToken;
  }

  @action saveToken(token: String) {
    this.token = token;

    window.localStorage['jwtToken'] = token;
  }

  @action destroyToken() {
    this.token = null;

    window.localStorage.removeItem('jwtToken');
  }

  get getToken(): string {
    return window.localStorage['jwtToken'];
  }

  get isPresentToken(): boolean {
    return this.getToken != null;
  }
}
