import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'shorten' })
export class ShortenPipe implements PipeTransform {
  transform(value: any) {
    let n, m, l, o;
    n = Math.floor(value).toString();
    // Thousand
    m = n.length - 3;
    // Million
    l = n.length - 6;
    // Billion
    o = n.length - 9;

    if (isNaN(value)) {
      return null;
    }

    if (value < 1000) {
      return value;
    } else if (value >= 1000 && value <= 999999) {
      n = n.substr(0, m) + ',' + value.toString().substr(-3, 3);

      return n;
    } else if (value >= 1000000 && value <= 999999999) {
      n = n.substr(0, l) + '.' + n.substr(-6, 1) + ' Million';
      return n;
    } else if (value >= 1000000000 && value <= 999999999999) {
      n = n.substr(0, o) + '.' + n.substr(-9, 1) + ' Billion';
      return n;
    }
  }
}
