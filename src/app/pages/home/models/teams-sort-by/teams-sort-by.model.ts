import { observable } from 'mobx-angular';

import { SignatureFnTeamsSortByType } from '../../types/signature-fn-teams-sort-by.type';

export class TeamsSortByModel {

  @observable name: string;
  fn: SignatureFnTeamsSortByType;

  constructor(value: TeamsSortByModel) {
    Object.assign(this, value);
  }
}
