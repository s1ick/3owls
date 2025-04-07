export interface Product {
    id: number;
    image: number;
    description: string;
    sale: number;
    oldPrice: number;
    newPrice: number;
    sizes: string[];
    isFavorite?: boolean;
  }