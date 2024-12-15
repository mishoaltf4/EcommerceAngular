export interface IProduct {
  id: number;
  title: string;
  inStock: boolean;
  price: number;
  color: 'blue' | 'green' | 'red' | 'yellow';
  size: 'small' | 'medium' | 'large' | 'huge';
  quantity: 1;
  detail?: string;
  img: string;
}
