import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KisJoinPipe } from './kis-join.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [KisJoinPipe],
  exports: [KisJoinPipe],
})
export class KisJoinPipeModule {}
