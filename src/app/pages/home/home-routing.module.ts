import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoutePathsEnum } from '../../core/navigation/enums/router-paths-enum';

import { HomeComponent } from './components/home/home.component';
import { MarketComponent } from './components/market/market.component';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';


const routes: Routes = [
  {
    path: '',
    component : HomeComponent,
    children: [
      {
        path: RoutePathsEnum.market,
        component : MarketComponent
      },
      {
        path: RoutePathsEnum.leaderboard,
        component : LeaderboardComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
