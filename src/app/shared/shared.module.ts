import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EllipsisMiddlePipePipe } from './pipes/ellipsis-middle-pipe.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    EllipsisMiddlePipePipe,
  ]
})
export class SharedModule { }
