import { Routes } from '@angular/router';
import {HomeComponent} from './pages/User/home/home.component';
import {ErrorPageComponent} from './error-page/error-page.component';
import {SingleProductComponent} from './pages/User/single-product/single-product.component';

export const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {path: 'product/:id', component: SingleProductComponent},
  {path: '**', component: ErrorPageComponent}
];
