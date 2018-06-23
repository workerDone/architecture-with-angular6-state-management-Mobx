import { observable, action } from 'mobx-angular';

export class UserModel {

  @observable id: string;
  @observable email: string;
  @observable name: string;
  @observable ethAddress: string;

  constructor(value?: UserModel) {
    Object.assign(this, value);
  }
}
