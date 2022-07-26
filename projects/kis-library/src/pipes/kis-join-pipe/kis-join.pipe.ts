import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'join',
})
export class KisJoinPipe implements PipeTransform {
  transform(value: string[], separator: string = ','): any {
    if (!value) {
      return 'Vacio';
    }
    return value.join(separator);
  }
}
