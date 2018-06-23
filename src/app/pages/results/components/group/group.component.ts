import { Component, OnInit, Input } from '@angular/core';
import { observable, computed }from 'mobx-angular';

import { ResultsService } from '../../services/results/results.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {

  @Input() groupKey: string;
  @Input() groupName: string;

  constructor(
    private resultsService: ResultsService
  ) { }

  ngOnInit() {
  }

  @computed get teamsGroup() {
    return this.resultsService.teamsGroupsPrepared[this.groupKey];
  }
}
