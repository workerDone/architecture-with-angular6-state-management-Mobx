import { Injectable } from '@angular/core';
import { observable, action, computed } from 'mobx-angular';

@Injectable({
  providedIn: 'root'
})
export class ApiStore {

  @observable private apiUrlDomain: string;
  @observable private apiUrlSuffixe = '/api';

  constructor() { }

  @action setApiUrlDomain(value: string) {
    this.apiUrlDomain = value;
  }

  @computed get apiUrl(): string {
    return this.apiUrlDomain + this.apiUrlSuffixe;
  }
}
