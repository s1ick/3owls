import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ProductComponent } from './product/product.component';
import { products } from './data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ ProductComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  products = products;

  trackById(index: number, product: any): number {
    return product.id;
  }
}