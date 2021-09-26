import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebAppCartComponent } from './web-app-cart/web-app-cart.component';
import { WebAppShopComponent } from './web-app-shop/web-app-shop.component';

const routes: Routes = [
  { path: 'shop', component: WebAppShopComponent },
  { path: 'cart', component: WebAppCartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
