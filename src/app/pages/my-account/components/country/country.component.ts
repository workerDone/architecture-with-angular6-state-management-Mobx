import { Component, OnInit } from '@angular/core';
import { computed } from 'mobx-angular';

import { AccountService } from '../../../../modules/account/services/account/account.service';

import { UserTeamAggregatedModel } from '../../../../modules/account/models/user-team-aggregated/user-team-aggregated.model';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {

  constructor(
    private accountService: AccountService
  ) { }

  ngOnInit() {
    this.accountService
      .getUserTeams()
      .subscribe();
  }

  @computed get userTeamsAggregated(): UserTeamAggregatedModel[] {
    return this.accountService.userTeamsAggregated;
  }
}
