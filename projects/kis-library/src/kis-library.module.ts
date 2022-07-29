import { NgModule } from '@angular/core';
import { KisJoinPipeModule } from './pipes/kis-join-pipe/kis-join-pipe.module';
import { KisSpinnerModule } from './components/kis-spinner/kis-spinner.module';
import { KisToastModule } from './components/kis-toast/kis-toast.module';
import { KisConstantsService } from './services/kis-constants.service';

@NgModule({
  declarations: [],
  imports: [KisJoinPipeModule, KisSpinnerModule, KisToastModule],
  exports: [KisJoinPipeModule, KisSpinnerModule, KisToastModule],
  providers: [KisConstantsService],
})
export class KisLibraryModule {}
