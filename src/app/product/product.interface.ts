export interface Product {
  id: number;
  image: string | number;
  description: string;
  oldPrice: number;
  newPrice: number;
  sizes: string[];
  isFavorite: boolean;
  }