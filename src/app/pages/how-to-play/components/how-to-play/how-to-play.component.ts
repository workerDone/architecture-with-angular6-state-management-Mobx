import { Component, OnInit } from '@angular/core';

import { HowToPlayService } from '../../how-to-play/how-to-play.service';

@Component({
  selector: 'app-how-to-play',
  templateUrl: './how-to-play.component.html',
  styleUrls: ['./how-to-play.component.scss']
})
export class HowToPlayComponent implements OnInit {

  constructor(
    private howToPlayService: HowToPlayService,
  ) { }

  ngOnInit() {
    this.howToPlayService.accordionInit();
  }
}
