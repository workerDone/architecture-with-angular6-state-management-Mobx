import  { observable } from 'mobx-angular';

export class TeamInfoModel {

  @observable fullName: string;
  @observable fileName: string;
  @observable appearances: string;
  @observable previousPlace: string;
  @observable rating: number;

  constructor(value: TeamInfoModel) {
    Object.assign(this, value);

    if (this.fullName != null) {
      this.fileName = this.fullName.replace(' ', '-');
    }
  }
}
