
import { Product, Category } from './types';

export const COLORS = {
  NAVY: '#0A1128',
  WHITE: '#FFFFFF',
  GRAY: '#F3F4F6',
  MUTED_GRAY: '#9CA3AF'
};

export const LOGO_URL = 'https://raw.githubusercontent.com/stackblitz/stackblitz-images/main/fashion-logo-bj.png'; // Fallback link for clarity or use provided asset

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Standard Oversized Hoodie',
    price: 180,
    category: 'Men',
    image: 'https://picsum.photos/seed/fashion1/800/1000',
    color: 'Navy',
    size: ['S', 'M', 'L', 'XL']
  },
  {
    id: '2',
    name: 'Minimal Wool Blazer',
    price: 450,
    category: 'Women',
    image: 'https://picsum.photos/seed/fashion2/800/1000',
    color: 'Deep Blue',
    size: ['XS', 'S', 'M', 'L']
  },
  {
    id: '3',
    name: 'Technical Cargo Trousers',
    price: 220,
    category: 'Men',
    image: 'https://picsum.photos/seed/fashion3/800/1000',
    color: 'Charcoal',
    size: ['30', '32', '34']
  },
  {
    id: '4',
    name: 'Sculpted Silk Dress',
    price: 650,
    category: 'Women',
    image: 'https://picsum.photos/seed/fashion4/800/1000',
    color: 'Cream',
    size: ['S', 'M']
  },
  {
    id: '5',
    name: 'Leather Chelsea Boots',
    price: 320,
    category: 'Footwear',
    image: 'https://picsum.photos/seed/fashion5/800/1000',
    color: 'Midnight',
    size: ['8', '9', '10', '11']
  },
  {
    id: '6',
    name: 'Brushed Cotton Scarf',
    price: 95,
    category: 'Accessories',
    image: 'https://picsum.photos/seed/fashion6/800/1000',
    color: 'Navy Melange',
    size: ['One Size']
  },
  {
    id: '7',
    name: 'Premium Canvas Tote',
    price: 120,
    category: 'Accessories',
    image: 'https://picsum.photos/seed/fashion7/800/1000',
    color: 'White/Navy',
    size: ['One Size']
  },
  {
    id: '8',
    name: 'Merino Wool Sweater',
    price: 280,
    category: 'Men',
    image: 'https://picsum.photos/seed/fashion8/800/1000',
    color: 'Soft Gray',
    size: ['M', 'L', 'XL']
  }
];

export const CATEGORIES: Category[] = [
  {
    id: 'men',
    name: 'Men',
    image: 'https://picsum.photos/seed/men1/1200/800',
    description: 'Precision-cut staples for the modern man.'
  },
  {
    id: 'women',
    name: 'Women',
    image: 'https://picsum.photos/seed/women1/1200/800',
    description: 'Elegant silhouettes redefined.'
  },
  {
    id: 'footwear',
    name: 'Footwear',
    image: 'https://picsum.photos/seed/shoes1/1200/800',
    description: 'Step into the future of luxury.'
  },
  {
    id: 'accessories',
    name: 'Accessories',
    image: 'https://picsum.photos/seed/acc1/1200/800',
    description: 'The final touches of refinement.'
  }
];
