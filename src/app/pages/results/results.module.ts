import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobxAngularModule } from 'mobx-angular';

import { ResultsRoutingModule } from './results-routing.module';

import { ResultsComponent } from './components/results/results.component';
import { GroupComponent } from './components/group/group.component';

@NgModule({
  imports: [
    CommonModule,
    MobxAngularModule,
    ResultsRoutingModule
  ],
  declarations: [ResultsComponent, GroupComponent]
})
export class ResultsModule { }
