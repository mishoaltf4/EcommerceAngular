import { Component } from '@angular/core';
import {FooterComponent} from '../outlet/footer/footer.component';
import {HeaderComponent} from '../outlet/header/header.component';

@Component({
  selector: 'app-home',
  imports: [
    FooterComponent,
    HeaderComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
