import { Component, Input, OnInit } from '@angular/core';
import { KisToastService } from './kis-toast.service';

@Component({
  selector: 'kis-toast',
  templateUrl: './kis-toast.component.html',
  styleUrls: ['./kis-toast.component.scss'],
})
export class KisToastComponent implements OnInit {
  @Input() timeout: number;
  constructor(public toastService: KisToastService) {}

  ngOnInit() {
    if (this.timeout) {
      this.toastService.timeout = this.timeout;
    }
  }

  closeToast(toast) {
    this.toastService.closeToast(toast);
  }
}
