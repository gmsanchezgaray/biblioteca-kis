import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KisExampleComponent } from './showcase/kis-example/kis-example.component';
import { ShowcaseKisPipeJoinComponent } from './showcase/showcase-kis-pipe-join/showcase-kis-pipe-join.component';
import { ShowcaseKisSpinnerComponent } from './showcase/showcase-kis-spinner/showcase-kis-spinner.component';

const routes: Routes = [
  { path: 'kis-example', component: KisExampleComponent },
  { path: 'kis-join', component: ShowcaseKisPipeJoinComponent },
  { path: 'kis-spinner', component: ShowcaseKisSpinnerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule],
})
export class AppRoutingModule {}
