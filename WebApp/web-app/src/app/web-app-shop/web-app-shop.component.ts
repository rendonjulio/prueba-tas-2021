import { Component, OnInit } from '@angular/core';
import { Category } from './Category';
import { Product } from './Product';

@Component({
  selector: 'app-web-app-shop',
  templateUrl: './web-app-shop.component.html',
  styleUrls: ['./web-app-shop.component.scss']
})
export class WebAppShopComponent implements OnInit {

  products: Product[]=[];
  visibleProducts: Product[]=[];
  selectedProduct:Product[]=[];

  selectedCategories:Category[]=[];
  categories: Category []=[];
  
  nameInput: string  = "";
  orderByPriceDesending: boolean=false;
  


  constructor() { }

  ngOnInit(): void {
  }

  onNameInput(event:any):void{
    this.nameInput = event.target.value;
    this.filterProducts();
  }

  filterProducts() {
    
  }

}
