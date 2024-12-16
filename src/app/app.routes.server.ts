import { RenderMode, ServerRoute } from '@angular/ssr';
import {ProductsService} from './services/products.service';
import {inject} from '@angular/core';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'product/:id',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      const dataService = inject(ProductsService);
      const ids = await dataService.getProductsId();
      return ids.map(id => ({ id: id.toString() }));
    },
  },
  {
    path: '',
    renderMode: RenderMode.Client,
  },
  {
    path: 'home',
    renderMode: RenderMode.Client,
  },
  {
    path: '**',
    renderMode: RenderMode.Client,
  },
];
