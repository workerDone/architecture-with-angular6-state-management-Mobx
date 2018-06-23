import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AchievementsIncentivesComponent } from './components/achievements-incentives/achievements-incentives.component';

const routes: Routes = [
  {
    path: '',
    component: AchievementsIncentivesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AchievementsIncentivesRoutingModule { }
