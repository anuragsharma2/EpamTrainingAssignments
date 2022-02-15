import { Injectable } from '@angular/core';
import { Product } from './Product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root' //appmodule
})
export class ProductService {

  constructor(private http:HttpClient) { }
  ProductList!:Product[] ;
  url="http://localhost:3000/products"
  getAllProducts():Observable<any>{
    return this.http.get(this.url);
  }
  getProductById(id:number){
     return this.http.get(this.url+"?productId_like="+id);
  }
  getProductByCost(cost:number):Observable<any>{
     return this.http.get(this.url+"?productCost_like="+cost);
  }
  getProductByName(name:string):Observable<any>{
    return this.http.get(this.url+"?productName_like="+name);
  }
  getProductByDescription(description:string):Observable<any>{
    return this.http.get(this.url+"?productDescription_like="+description);
  }
  getProductByAll(id:number,name:string,cost:number,description:string):Observable<any>{
    return this.http.get(this.url+"?productId_like="+id+"&&productName_like="+name);
  }
}
