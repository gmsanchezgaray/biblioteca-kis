import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { KisLibraryModule } from 'projects/kis-library/src/kis-library.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ShowcaseKisPipeJoinComponent } from './showcase/showcase-kis-pipe-join/showcase-kis-pipe-join.component';
import { ShowcaseKisSpinnerComponent } from './showcase/showcase-kis-spinner/showcase-kis-spinner.component';
import { ShowcaseKisToastComponent } from './showcase/showcase-kis-toast/showcase-kis-toast.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowcaseKisPipeJoinComponent,
    ShowcaseKisSpinnerComponent,
    ShowcaseKisToastComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, KisLibraryModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
