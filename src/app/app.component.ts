import { Component, OnInit } from '@angular/core';
import { ProductComponent } from './product/product.component';
import { CommonModule } from '@angular/common';
import { InfiniteScrollDirective } from 'ngx-infinite-scroll';
import { CdkDragDrop, CdkDrag, CdkDropList, moveItemInArray } from '@angular/cdk/drag-drop';
import { trigger, transition, style, animate } from '@angular/animations';
import { ProductService } from './product.service';
import { Product } from './product/product.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    ProductComponent,
    InfiniteScrollDirective,
    CdkDrag,
    CdkDropList
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-out', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class AppComponent implements OnInit {
  allProducts: Product[] = [];
  visibleProducts: Product[] = [];
  batchSize = 8;
  loading = false;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.allProducts = this.productService.generateProducts(100);
    this.loadMore();
  }

  onScroll() {
    if (!this.loading && this.visibleProducts.length < this.allProducts.length) {
      this.loadMore();
    }
  }

  loadMore() {
    this.loading = true;
    const nextBatch = this.allProducts.slice(
      this.visibleProducts.length,
      this.visibleProducts.length + this.batchSize
    );

    setTimeout(() => {
      this.visibleProducts = [...this.visibleProducts, ...nextBatch];
      this.loading = false;
    }, 800);
  }

  drop(event: CdkDragDrop<Product[]>) {
    moveItemInArray(
      this.visibleProducts,
      event.previousIndex,
      event.currentIndex
    );
  }

  trackById(index: number, item: Product): number {
    return item.id;
  }
}