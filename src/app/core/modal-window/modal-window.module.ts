import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalWindowService } from './modal-window/modal-window.service';
@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    ModalWindowService,
  ],

  declarations: []
})
export class ModalWindowModule { }
