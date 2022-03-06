import { Injectable } from '@angular/core';
import { Product } from './Product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  cartProducts:Product[]=[];
  cartTotal:number=0;
  orderBackendArray:any=[];
  productQuantity:any=[];
  baseUrl="http://localhost:8001/";
  getAllProducts():Observable<any>{
    let url=this.baseUrl+"getAllProducts";
    return this.http.get(url);
  }
  getProductByName(pname:string,products:Product[]):Product[]{
    let gotProductByName=products.filter( 
      (product)=>{
        return product.productTitle.toUpperCase().includes(pname.toUpperCase());
      })
      return gotProductByName;
  }
  getProductByPriceRange(productStartingPrice:number|'',productEndingPrice:number|'',products:Product[]){
    let gotProductsByPriceRange=products.filter(
      (product)=>{
        return product.productCost<=productEndingPrice && product.productCost>=productStartingPrice;
      }
    )
    return gotProductsByPriceRange;
  }
  getMensProducts():Observable<any>{
    let url=this.baseUrl+"getProductsByCategory/mens";    
    return this.http.get(url);
  }
  getWomensProducts():Observable<any>{
    let url=this.baseUrl+"getProductsByCategory/womens"
    return this.http.get(url);
  }
  getKidsProducts():Observable<any>{    
    let url=this.baseUrl+"getProductsByCategory/kids"
    return this.http.get(url);
  }
  getElectronicsProducts():Observable<any>{ 
    let url=this.baseUrl+"getProductsByCategory/electronics"
    return this.http.get(url);
  }
  getPreviousOrders():Observable<any>{
    let url=this.baseUrl+"getPreviousOrders";
    return this.http.get(url);
  }
  defineCartQuantity(){ 
    let d= new Date();
    let date=d.toLocaleString("en-US", {timeZone: "Asia/Kolkata"});
    for(let i=0;i<this.cartProducts.length;i++){
        this.orderBackendArray.push({product:this.cartProducts[i],quantity:this.productQuantity[i],createdAt:date});
      }
    }
}

