import { observable } from 'mobx-angular';

export class PurchaseModel {

  @observable contract: string;
  @observable data: string;
  @observable price: string;
  @observable formattedPrice: string;

  constructor(value?: PurchaseModel) {
    Object.assign(this, value);
  }
}
