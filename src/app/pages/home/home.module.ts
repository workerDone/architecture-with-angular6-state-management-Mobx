import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobxAngularModule } from 'mobx-angular';

import { HomeRoutingModule } from './home-routing.module';

import { HomeService } from './services/home/home.service';

import { HomeComponent } from './components/home/home.component';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';
import { MarketComponent } from './components/market/market.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    MobxAngularModule,
  ],
  providers: [
    HomeService,
  ],
  declarations: [
    HomeComponent,
    LeaderboardComponent,
    MarketComponent,
  ]
})
export class HomeModule { }
