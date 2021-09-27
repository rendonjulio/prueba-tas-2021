import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebAppHeaderComponent } from './web-app-header/web-app-header.component';
import { WebAppFooterComponent } from './web-app-footer/web-app-footer.component';
import { WebAppShopComponent } from './web-app-shop/web-app-shop.component';
import { WebAppCartComponent } from './web-app-cart/web-app-cart.component';
import { HttpClientModule } from '@angular/common/http';
import { WebAppHomeComponent } from './web-app-home/web-app-home.component';

@NgModule({
  declarations: [
    AppComponent,
    WebAppHeaderComponent,
    WebAppFooterComponent,
    WebAppShopComponent,
    WebAppCartComponent,
    WebAppHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
