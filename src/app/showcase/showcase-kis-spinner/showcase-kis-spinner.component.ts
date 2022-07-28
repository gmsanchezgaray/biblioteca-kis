import { Component, OnInit } from '@angular/core';
import { KisSpinnerService } from 'projects/kis-library/src/public-api';

@Component({
  selector: 'app-showcase-kis-spinner',
  templateUrl: './showcase-kis-spinner.component.html',
  styleUrls: ['./showcase-kis-spinner.component.css'],
})
export class ShowcaseKisSpinnerComponent implements OnInit {
  public embedded: boolean;
  constructor(public kisSpinner: KisSpinnerService) {
    this.embedded = false;
  }

  ngOnInit() {}

  activarSpinner() {
    this.kisSpinner.showSpinner();
    setTimeout(() => {
      this.kisSpinner.hideSpinner();
    }, 3000);
  }
  cambiarModo() {
    this.embedded = !this.embedded;
  }
}
