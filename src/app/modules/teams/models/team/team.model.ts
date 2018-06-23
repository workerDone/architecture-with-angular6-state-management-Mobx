import { observable, action, computed } from 'mobx-angular';

import { formattingEthAddress } from '../../../../shared/helpers/formatting-eth-address';

export class TeamModel {
  
  @observable teamId: number;
  @observable name: string;
  @observable price: string;
  @observable formattedPrice: string;
  @observable owner: string;
  @observable ownerName: string;
  @observable transferCount: number;

  constructor(value?: TeamModel) {
    Object.assign(this, value);
  }

  @computed get ownerText(): string {
    if (this.owner === '0x0000000000000000000000000000000000000000') {
      return null
    } else {
      return this.ownerName || this.ownerFormatted;
    }
  }

  @computed get ownerFormatted() {
    return formattingEthAddress(this.owner);
  }
}
