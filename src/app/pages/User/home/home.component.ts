import { Component } from '@angular/core';
import {FooterComponent} from '../outlet/footer/footer.component';
import {HeaderComponent} from '../outlet/header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { OnInit} from '@angular/core';
import {ProductsService} from '../../../services/products.service';
import {IProduct} from '../../../interfaces/products/ProductsInterface';
import {CommonModule} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    FooterComponent,
    HeaderComponent,
    MatIconModule,
    CommonModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  products: IProduct[] = [];

  constructor(private productsService: ProductsService, private router: Router) {
  }

  ngOnInit() {
    this.products = this.productsService.getProducts();
  }
  goToProduct(productId: number): void {
    this.productsService.goToProduct(productId);
  }
}
