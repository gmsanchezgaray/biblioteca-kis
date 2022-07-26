import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { KisLibraryModule } from 'projects/kis-library/src/kis-library.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ShowcaseKisPipeJoinComponent } from './showcase/showcase-kis-pipe-join/showcase-kis-pipe-join.component';

@NgModule({
  declarations: [AppComponent, ShowcaseKisPipeJoinComponent],
  imports: [BrowserModule, AppRoutingModule, KisLibraryModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
