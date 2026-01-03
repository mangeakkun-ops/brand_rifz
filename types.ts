
export interface Product {
  id: string;
  name: string;
  category: 'Jacket' | 'Hoodie' | 'Apparel';
  price: number;
  image: string;
  description: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
