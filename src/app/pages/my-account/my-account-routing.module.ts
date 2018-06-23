import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoutePathsEnum } from '../../core/navigation/enums/router-paths-enum';

import { AccountComponent } from './components/account/account.component';
import { CountryComponent } from './components/country/country.component';
import { SettingsComponent } from './components/settings/settings.component';

const routes: Routes = [ {
  path: '',
  component : AccountComponent,
  children: [
    {
      path: RoutePathsEnum.country,
      component: CountryComponent
    },
    {
      path: RoutePathsEnum.settings,
      component: SettingsComponent
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyAccountRoutingModule { }
