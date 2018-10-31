import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';

const appRoutes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'cart',
    component: CartComponent
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
