import { Component, OnInit } from '@angular/core';
import { computed } from 'mobx-angular';

import { ResultsService } from '../../services/results/results.service';

import { TeamsGroupsModel } from '../../models/teams-groups/teams-groups.model';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  constructor(
    private resultsService: ResultsService
  ) { }

  ngOnInit() {
    this.resultsService
      .getTeamGroups()
      .subscribe();
  }

  @computed get teamsGroupsPrepared(): TeamsGroupsModel {
    return this.resultsService.teamsGroupsPrepared;
  }
}
