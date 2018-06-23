import { observable, computed } from 'mobx-angular';

import { formattingEthAddress } from '../../../../shared/helpers/formatting-eth-address';

export class AchievementsIncentivesResponseModel {

  @observable winnerIds: number[];
  @observable mostProfitableBidders: string[]

  constructor(value?: AchievementsIncentivesResponseModel) {
    Object.assign(this, value);
  }

  @computed get mostProfitableBiddersFormatted() {
    const mostProfitableBidders = this.mostProfitableBidders;

    if (this.mostProfitableBidders == null) {
      return [];
    }

    return mostProfitableBidders.map((item) =>
      formattingEthAddress(item)
    )
  }
}
