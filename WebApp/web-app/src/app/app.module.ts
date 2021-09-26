import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebAppHeaderComponent } from './web-app-header/web-app-header.component';
import { WebAppFooterComponent } from './web-app-footer/web-app-footer.component';
import { WebAppShopComponent } from './web-app-shop/web-app-shop.component';
import { WebAppCartComponent } from './web-app-cart/web-app-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    WebAppHeaderComponent,
    WebAppFooterComponent,
    WebAppShopComponent,
    WebAppCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
