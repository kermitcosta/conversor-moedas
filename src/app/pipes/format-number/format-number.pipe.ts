import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatNumber'
})
export class FormatNumberPipe implements PipeTransform {

  transform(value: number): any {
    let userLang = navigator.language;
    if (value === 0) {
      return 0
    }
    if (!value) {
      return;
    }
    else {
      return new Intl.NumberFormat(userLang, { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(value)
    }
  }

}
