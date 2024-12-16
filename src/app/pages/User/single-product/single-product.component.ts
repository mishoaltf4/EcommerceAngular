import { Component } from '@angular/core';
import {HeaderComponent} from '../outlet/header/header.component';
import {FooterComponent} from '../outlet/footer/footer.component';

@Component({
  selector: 'app-single-product',
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './single-product.component.html',
  styleUrl: './single-product.component.scss'
})
export class SingleProductComponent {

}
