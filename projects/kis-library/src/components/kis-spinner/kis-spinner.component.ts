import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { KisSpinnerService } from './kis-spinner.service';

@Component({
  selector: 'kis-spinner',
  templateUrl: './kis-spinner.component.html',
  styleUrls: ['./kis-spinner.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class KisSpinnerComponent implements OnInit {
  @Input() embedded: boolean = false;

  constructor(public kisSpinner: KisSpinnerService) {}

  ngOnInit() {}
}
