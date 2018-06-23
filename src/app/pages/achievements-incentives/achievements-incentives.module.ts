import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobxAngularModule } from 'mobx-angular';

import { AchievementsIncentivesRoutingModule } from './achievements-incentives-routing.module';

import { AchievementsIncentivesComponent } from './components/achievements-incentives/achievements-incentives.component';
  
@NgModule({
  imports: [
    CommonModule,
    MobxAngularModule,
    AchievementsIncentivesRoutingModule
  ],
  declarations: [AchievementsIncentivesComponent]
})
export class AchievementsIncentivesModule { }
