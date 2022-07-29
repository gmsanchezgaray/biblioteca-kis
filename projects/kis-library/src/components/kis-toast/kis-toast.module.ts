import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KisToastComponent } from './kis-toast.component';
import { KisToastService } from './kis-toast.service';

@NgModule({
  imports: [CommonModule],
  declarations: [KisToastComponent],
  exports: [KisToastComponent],
  providers: [KisToastService],
})
export class KisToastModule {}
