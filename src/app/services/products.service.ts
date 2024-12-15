import { Injectable } from '@angular/core';
import {IProduct} from '../interfaces/products/ProductsInterface';

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
      img: './Products/cover.png'
    },
    {
      id: 2,
      title: "Classic Monochrome Tees",
      inStock: true,
      price: 75.00,
      color: 'blue',
      size: "small",
      quantity: 1,
      img: './Products/cover-1.png'
    },
    {
      id: 3,
      title: "Classic Monochrome Tees",
      inStock: false,
      price: 75.00,
      color: 'blue',
      size: "small",
      quantity: 1,
      img: './Products/cover-2.png'
    },
    {
      id: 4,
      title: "Classic Monochrome Tees",
      inStock: true,
      price: 75.00,
      color: 'blue',
      size: "small",
      quantity: 1,
      img: './Products/cover-3.png'
    },
  ];

  constructor() { }

  getProducts(): IProduct[] {
    return this.products;
  }
}
