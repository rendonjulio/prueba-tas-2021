import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Category } from './Category';
import { Product } from './Product';

@Injectable({
  providedIn: 'root'
})
export class WepAppServiceService {

  constructor(private httpClient:HttpClient) { }

  public async getCategoriesFromServer():Promise<Category[]>{
    return await this.httpClient.get<Category[]>("https://my-json-server.typicode.com/TASNETWORK/Prueba-DJunior/categories").toPromise();
  }

  public async getProductsFromServer():Promise<Product[]>{
    return await this.httpClient.get<Product[]>("https://my-json-server.typicode.com/TASNETWORK/Prueba-DJunior/products").toPromise();
  }
}
