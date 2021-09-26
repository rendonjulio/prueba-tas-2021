import { Component, OnInit } from '@angular/core';
import { Category } from './Category';
import { Product } from './Product';
import { WepAppServiceService } from './wep-app-service.service';

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
  


  constructor(private wepAppService:WepAppServiceService) { }

  async ngOnInit(){
    await this.loadDataFromServer();
    this.filterProducts();
  }

  onNameInput(event:any):void{
    this.nameInput = event.target.value;
    this.filterProducts();
  }

  async loadDataFromServer(){
    this.categories = await this.wepAppService.getCategoriesFromServer();
    this.products = await this.wepAppService.getProductsFromServer();
  }

  filterProducts() {
    
  }

}
