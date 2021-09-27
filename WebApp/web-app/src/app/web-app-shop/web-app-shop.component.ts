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

  selectedCategory:number = 0;
  categories: Category []=[];
  
  nameInput: string  = "";
  orderByPriceDesending: boolean=false;
  


  constructor(private wepAppService:WepAppServiceService) { }

  async ngOnInit(){
    await this.loadDataFromServer();
    this.products.forEach(p=>p.price = Number(p.price))
    this.filterProducts();
  }

  onNameInput(event:any):void{
    this.nameInput = event.target.value;
    this.filterProducts();
  }

  onOrderChange(event:any){
      this.orderByPriceDesending=event.target.value=="priceDesc"; 
       this.filterProducts();
  }

  onCategoryChange(event:any){
    this.selectedCategory = Number(event.target.value);
    this.filterProducts();
  }

  async loadDataFromServer(){
    this.categories = await this.wepAppService.getCategoriesFromServer();
    this.products = await this.wepAppService.getProductsFromServer();
  }

  filterProducts() {
    this.visibleProducts=this.products.filter(p=>p.name.toLowerCase().includes(this.nameInput.toLowerCase()));

   if(this.selectedCategory>=0)
    {
      this.visibleProducts=this.visibleProducts.filter(p=>p.categories.includes(this.selectedCategory));
    }
    
    if (this.orderByPriceDesending){
      this.visibleProducts=this.visibleProducts.sort((p1,p2)=>p1.price>p2.price?1:-1);
    }
    else
    {
      this.visibleProducts=this.visibleProducts.sort((p1,p2)=>p1.price<p2.price?1:-1);
    }
    

  }

}
