import { observable } from 'mobx-angular';

export class UserTeamModel {

  @observable teamId:	number;
  @observable name:	string;
  @observable price:	string;
  @observable formattedPrice:	string;
  @observable transferPrice:	string;
  @observable formattedTransferPrice:	string;
  @observable owner:	string;
  @observable transferDate:	string;

  constructor(value: UserTeamModel) {
    Object.assign(this, value);
  }
}
