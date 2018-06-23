import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoutePathsEnum } from '../../core/navigation/enums/router-paths-enum';

import { HowToPlayComponent } from './components/how-to-play/how-to-play.component';

const routes: Routes = [{
  path: '',
  component: HowToPlayComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HowToPlayRoutingModule { }
