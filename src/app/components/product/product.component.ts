import {
  Component, Input, ChangeDetectionStrategy,
  ElementRef, ViewChild, AfterViewInit, signal, computed, inject
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.interface';
import { SalePipe } from './sale.pipe';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, SalePipe],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent implements AfterViewInit {
  @ViewChild('productImage') productImage!: ElementRef<HTMLImageElement>;
  @Input() product!: Product;

  // Signals для реактивного состояния
  selectedSize = signal<string | null>(null);
  isImageLoaded = signal(false);

  readonly pathImages = 'assets/images/';

  // Computed свойства
  hasDiscount = computed(() =>
    this.product.newPrice < this.product.oldPrice
  );

  getImageUrl(imageName: string): string {
    return `${this.pathImages}${imageName}.webp`;
  }

  toggleFavorite(event: Event): void {
    event.stopPropagation();
    this.product.isFavorite = !this.product.isFavorite;
  }

  ngAfterViewInit(): void {
    this.initializeLazyLoading();
  }

  private initializeLazyLoading(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          this.loadImage(img);
          observer.unobserve(img);
        }
      });
    }, {
      rootMargin: '200px 0px',
      threshold: 0.1
    });

    observer.observe(this.productImage.nativeElement);
  }

  private loadImage(img: HTMLImageElement): void {
    const src = this.getImageUrl(this.product.image.toString());
    img.src = src;
    img.onload = () => {
      this.isImageLoaded.set(true);
      img.classList.add('loaded');
    };
    img.onerror = () => {
      img.src = 'assets/images/placeholder.webp';
    };
  }

  selectSize(size: string, event: Event): void {
    event.stopPropagation();
    this.selectedSize.set(this.selectedSize() === size ? null : size);
  }
}
