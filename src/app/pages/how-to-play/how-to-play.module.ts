import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HowToPlayRoutingModule } from './how-to-play-routing.module';

import { HowToPlayService } from './how-to-play/how-to-play.service';

import { HowToPlayComponent } from './components/how-to-play/how-to-play.component';
@NgModule({
  imports: [
    CommonModule,
    HowToPlayRoutingModule
  ],
  providers: [
    HowToPlayService,
  ],
  declarations: [HowToPlayComponent]
})
export class HowToPlayModule { }
