import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'sale' })
export class SalePipe implements PipeTransform {
  transform(oldPrice: number, newPrice: number): string {
    if (oldPrice <= newPrice) return '';
    const sale = Math.round(((oldPrice - newPrice) / oldPrice) * 100);
    return `${sale}% OFF`;
  }
}