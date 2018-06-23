import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ApiService } from '../../../../core/api/services/api/api.service';

import { UserTeamModel } from '../../models/user-team/user-team.model';

@Injectable({
  providedIn: 'root'
})
export class AccountApiService {

  constructor(
    private apiService: ApiService
  ) { }

  getUserTeams(): Observable<UserTeamModel[]> {
    return this.apiService
      .get('teams/my')
      .pipe(
        map((teams: UserTeamModel[]) => {
          if (teams == null && Array.isArray(teams)) {
            throw new Error('IS_EMPTY');
          }

          return teams.map(team =>
            new UserTeamModel(team)
          )
        })
      );
  }
}
