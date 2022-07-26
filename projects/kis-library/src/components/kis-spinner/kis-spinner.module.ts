import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KisSpinnerComponent } from './kis-spinner.component';
import { KisSpinnerService } from './kis-spinner.service';

@NgModule({
  imports: [CommonModule],
  declarations: [KisSpinnerComponent],
  exports: [KisSpinnerComponent],
  providers: [KisSpinnerService],
})
export class KisSpinnerModule {}
