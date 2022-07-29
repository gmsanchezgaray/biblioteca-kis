import { Injectable } from '@angular/core';
import { KisConstantsService } from '../../services/kis-constants.service';
import { KisToast } from './bean/kis-toast';

@Injectable({
  providedIn: 'root',
})
export class KisToastService {
  private _toasts: KisToast[];
  private _timeout: number;

  public get toasts(): KisToast[] {
    return this._toasts;
  }

  public get timeout(): number {
    return this._timeout;
  }

  public set timeout(value: number) {
    this._timeout = value;
  }

  constructor(private constants: KisConstantsService) {
    this._toasts = [];
    this._timeout = this.constants.KisToastConstants.TIMEOUT;
  }

  addInfoMessage(title: string, message: string) {
    this.addMessage(title, message, this.constants.KisToastConstants.TYPE_INFO);
  }
  addWarningMessage(title: string, message: string) {
    this.addMessage(
      title,
      message,
      this.constants.KisToastConstants.TYPE_WARNING
    );
  }
  addErrorMessage(title: string, message: string) {
    this.addMessage(
      title,
      message,
      this.constants.KisToastConstants.TYPE_ERROR
    );
  }
  addSuccessMessage(title: string, message: string) {
    this.addMessage(
      title,
      message,
      this.constants.KisToastConstants.TYPE_SUCCESS
    );
  }

  private addMessage(title: string, message: string, type: string) {
    let toast: KisToast = new KisToast(title, message, type);
    this._toasts.push(toast);
    setTimeout(() => {
      this.closeToast(toast);
    }, this._timeout);
  }
  public closeToast(toast: KisToast) {
    let index: number = this._toasts.findIndex((t) => t === toast);
    if (index !== -1) {
      this._toasts.splice(index, 1);
    }
  }
}
