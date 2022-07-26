import { NgModule } from '@angular/core';
import { KisJoinPipeModule } from './pipes/kis-join-pipe/kis-join-pipe.module';
import { KisSpinnerModule } from './components/kis-spinner/kis-spinner.module';

@NgModule({
  declarations: [],
  imports: [KisJoinPipeModule, KisSpinnerModule],
  exports: [KisJoinPipeModule, KisSpinnerModule],
})
export class KisLibraryModule {}
