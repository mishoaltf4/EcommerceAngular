import { Injectable } from '@angular/core';
import {IProduct} from '../interfaces/products/ProductsInterface';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: IProduct[] = [
    {
      id: 1,
      title: "Classic Monochrome Tees",
      inStock: true,
      price: 75.00,
      color: 'blue',
      size: "small",
      quantity: 1,
      img: 'images/Products/cover.png',
      detail: 'Elevate your everyday style with our Men\'s Black T-Shirts, the ultimate wardrobe essential for modern men. Crafted with meticulous attention to detail and designed for comfort, these versatile black tees are a must-have addition to your collection.\n' +
        'The classic black color never goes out of style. Whether you\'re dressing up for a special occasion or keeping it casual, these black t-shirts are the perfect choice, effortlessly complementing any outfit.',
      reviews: [
        {
          id: 1,
          uid: 1,
          content: "The best top ever"
        },
        {
          id: 2,
          uid: 2,
          content: "The best top ever By me"
        },
      ],
    },
    {
      id: 2,
      title: "Classic Monochrome Tees",
      inStock: true,
      price: 75.00,
      color: 'blue',
      size: "small",
      quantity: 1,
      img: 'images/Products/cover-1.png',
      reviews: [
        {
          id: 1,
          uid: 1,
          content: "The best top ever"
        },
        {
          id: 2,
          uid: 2,
          content: "The best top ever By me"
        },
        {
          id: 3,
          uid: 3,
          content: "The best top ever By me"
        },
      ],
    },
    {
      id: 3,
      title: "Classic Monochrome Tees",
      inStock: false,
      price: 75.00,
      color: 'blue',
      size: "small",
      quantity: 1,
      img: 'images/Products/cover-2.png'
    },
    {
      id: 4,
      title: "Classic Monochrome Tees",
      inStock: true,
      price: 75.00,
      color: 'blue',
      size: "small",
      quantity: 1,
      img: 'images/Products/cover-3.png'
    },
  ];

  constructor(private router: Router) { }

  getProducts(): IProduct[] {
    return this.products;
  }

  getProductsId(): Promise<number[]> {
    return Promise.resolve(this.products.map(product => product.id));
  }

  getProductById(id: number): IProduct | undefined {
    return this.products.find(product => product.id === id);
  }

  goToProduct(productId: number): void{
    this.router.navigate(['/product/', productId]);
  }
}
