
export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  color: string;
  size: string[];
}

export interface Category {
  id: string;
  name: string;
  image: string;
  description: string;
}

export type CustomFitStep = 'garment' | 'measurements' | 'fabric' | 'review';
