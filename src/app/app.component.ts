import { Component, OnInit, signal, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { CdkDragDrop, CdkDrag, CdkDropList, moveItemInArray } from '@angular/cdk/drag-drop';
import { trigger, transition, style, animate } from '@angular/animations';
import { ProductService } from './product.service';
import { ProductComponent } from './components/product/product.component';
import { Product } from './models/product.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    ProductComponent,
    InfiniteScrollModule,
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
  private productService = inject(ProductService);

  allProducts = signal<Product[]>([]);
  visibleProducts = signal<Product[]>([]);
  loading = signal(false);

  batchSize = 8;

  canLoadMore = computed(() =>
    !this.loading() && this.visibleProducts().length < this.allProducts().length
  );

  ngOnInit() {
    this.allProducts.set(this.productService.generateProducts(100));
    this.loadMore();
  }

  onScroll() {
    if (this.canLoadMore()) {
      this.loadMore();
    }
  }

  loadMore() {
    this.loading.set(true);

    const currentVisible = this.visibleProducts();
    const all = this.allProducts();

    const nextBatch = all.slice(
      currentVisible.length,
      currentVisible.length + this.batchSize
    );

    setTimeout(() => {
      this.visibleProducts.update(products => [...products, ...nextBatch]);
      this.loading.set(false);
    }, 800);
  }

  drop(event: CdkDragDrop<Product[]>) {
    this.visibleProducts.update(products => {
      const updatedProducts = [...products];
      moveItemInArray(updatedProducts, event.previousIndex, event.currentIndex);
      return updatedProducts;
    });
  }

  trackById(index: number, item: Product): number {
    return item.id;
  }
}
