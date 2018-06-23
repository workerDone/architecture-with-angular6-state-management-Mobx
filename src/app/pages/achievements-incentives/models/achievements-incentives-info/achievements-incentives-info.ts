import { observable } from 'mobx-angular';

export class AchievementsIncentivesInfo {

  @observable numberText: string;
  @observable ethAmount: string;

  constructor(value: AchievementsIncentivesInfo) {
    Object.assign(this, value);
  }
}
