import { 
  Component, Input, ChangeDetectionStrategy, 
  ElementRef, ViewChild, AfterViewInit 
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from './product.interface';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent implements AfterViewInit {
  @ViewChild('productImage') productImage!: ElementRef<HTMLImageElement>;
  @Input() product!: Product;
  selectedSize: string | null = null;
  
  readonly pathImages = 'assets/images/';
  isImageLoaded = false;

  get hasDiscount(): boolean {
    return !!this.product.sale && this.product.sale > 0;
  }

  get discountPercentage(): string {
    return `-${this.product.sale}%`;
  }

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
      this.isImageLoaded = true;
      img.classList.add('loaded');
    };
    img.onerror = () => {
      img.src = 'assets/images/placeholder.webp';
    };
  }

  selectSize(size: string, event: Event): void {
    event.stopPropagation();
    this.selectedSize = this.selectedSize === size ? null : size;
  }
}