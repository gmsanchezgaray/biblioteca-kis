import { Injectable } from '@angular/core';
import { KisToastConstants } from '../constants/kis-constants';

@Injectable({
  providedIn: 'root',
})
export class KisConstantsService {
  KisToastConstants = KisToastConstants;
  constructor() {}
}
