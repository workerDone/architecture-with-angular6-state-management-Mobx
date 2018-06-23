import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamsService } from './services/teams/teams.service';
import { TeamsStore } from './stores/teams/teams.store';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    TeamsService,
    TeamsStore
  ]
})
export class TeamsModule { }
