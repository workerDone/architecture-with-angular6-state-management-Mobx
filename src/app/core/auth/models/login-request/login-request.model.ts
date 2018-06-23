import { computed } from 'mobx-angular';

export class LoginRequestModel {

  @computed signature: string;
  @computed email: string;
  @computed name: string;
  @computed ethAddress: string;
}
