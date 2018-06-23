import { observable, action } from 'mobx-angular';

export class TransferModel {

  @observable teamId: number;
  @observable date: string;
  @observable from: string;
  @observable to: string;
  @observable price: string;
  @observable formattedPrice: string;
  @observable toName: string;
  @observable fromName: string;

  constructor(value?: TransferModel) {
    Object.assign(this, value);
  }
}
