import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationService } from './service/navigation.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    NavigationService
  ],
  declarations: []
})
export class NavigationModule { }
