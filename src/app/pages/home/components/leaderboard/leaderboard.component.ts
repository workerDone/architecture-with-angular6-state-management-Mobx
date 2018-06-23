import { Component, OnInit } from '@angular/core';
import { computed } from 'mobx-angular';

import { HomeService } from '../../services/home/home.service';

import { TransferAggregatedModel } from '../../../../modules/transfers/models/transfer-aggregated/transfer-aggregated.model';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent implements OnInit {

  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit() {
    this.homeService
      .getTopTransfers()
      .subscribe();
  }

  @computed get topTransferAggregated(): TransferAggregatedModel[] {
    return this.homeService.topTransfersAggregated;
  }
}
