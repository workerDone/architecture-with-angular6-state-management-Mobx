import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { action } from 'mobx-angular';

import { ApiService } from '../../../../core/api/services/api/api.service';

import { AchievementsIncentivesResponseModel } from '../../models/achievements-incentives-response/achievements-incentives-response.model';

@Injectable({
  providedIn: 'root'
})
export class AchievementsIncentivesApiService {

  constructor(
    private apiService: ApiService
  ) { }

  @action getResults() {
    return this.apiService
      .get('results')
      .pipe(
        map((result) =>
          new AchievementsIncentivesResponseModel(result)
        )
      )
  }
}
