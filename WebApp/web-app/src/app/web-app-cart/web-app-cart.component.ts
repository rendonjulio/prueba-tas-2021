import { Component, OnInit } from '@angular/core';
import { Product } from '../web-app-shop/Product';

@Component({
  selector: 'app-web-app-cart',
  templateUrl: './web-app-cart.component.html',
  styleUrls: ['./web-app-cart.component.scss']
})
export class WebAppCartComponent implements OnInit {
  totalPrice:number=0;
  products:Product[] =[];

  constructor() { }

  ngOnInit(): void {
    this.loadProductsFromLocalStorage();
  }

  loadProductsFromLocalStorage(){
    let jsonContent:string|null = localStorage.getItem("cartProducts");
    if(jsonContent!=null){
      this.products = JSON.parse(jsonContent);
      this.onUpdateCart();
    }
  }

  onRemoveProduct(productIndex:number){
    this.products.splice(productIndex,1);
    this.onUpdateCart();
    localStorage.setItem("cartProducts", JSON.stringify(this.products));
  }
  onUpdateCart(){
    this.totalPrice=0;
    this.products.forEach(p=> this.totalPrice+=p.price)
  }

}
