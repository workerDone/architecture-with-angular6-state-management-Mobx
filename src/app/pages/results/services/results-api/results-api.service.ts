import { Injectable } from '@angular/core';
import { action } from 'mobx-angular';

import { ApiService } from '../../../../core/api/services/api/api.service';

@Injectable({
  providedIn: 'root'
})
export class ResultsApiService {

  constructor(
    private apiService: ApiService
  ) { }

  @action getTeamGroups() {
    return this.apiService.get('teams/table');
  }
}
