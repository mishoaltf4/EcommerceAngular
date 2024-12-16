import { Component } from '@angular/core';
import {HeaderComponent} from '../outlet/header/header.component';
import {FooterComponent} from '../outlet/footer/footer.component';
import {ProductsService} from '../../../services/products.service';
import {OnInit} from '@angular/core';
import {IProduct} from '../../../interfaces/products/ProductsInterface';
import {CommonModule} from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-single-product',
  imports: [
    HeaderComponent,
    FooterComponent,
    CommonModule,
    MatIconModule,
    MatTabsModule,
  ],
  templateUrl: './single-product.component.html',
  styleUrl: './single-product.component.scss'
})
export class SingleProductComponent implements OnInit {
  product?: IProduct;
  products?: IProduct[];

  constructor(private productService: ProductsService, private activeRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.product = this.productService.getProductById(id);
    })
    this.products = this.productService.getProducts();
  }

  goToProduct(productId: number): void {
    this.productService.goToProduct(productId);
  }
}
