
export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  description: string;
  price: number;
  discountPrice?: number;
  imageUrl: string;
  imageUrl2?: string;
  specifications: Record<string, string | number>;
  rating: number;
  reviewCount: number;
  stock: number;
  tags: string[];
  featured?: boolean;
  new?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Order {
  id: string;
  items: CartItem[];
  subtotal: number;
  tax: number;
  shipping: number;
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  createdAt: Date;
}

export interface Category {
  id: string;
  name: string;
  imageUrl: string;
  count: number;
}

export interface Brand {
  id: string;
  name: string;
  imageUrl?: string;
  count: number;
}

export type ThemeMode = 'light' | 'dark';
