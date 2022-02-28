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
  cartMap=new Map();
  cartTotal:number=0;
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
  }/*
  getProductByStartingPrice(productStartingPrice:number,products:Product[]){
    let gotProductByStartingPrice=products.filter(
      (product)=>{
        return product.productCost>=productStartingPrice;
      }
    )
    return gotProductByStartingPrice;
  }
  getProductByEndingPrice(productEndingPrice:number,products:Product[]){
    if(!productEndingPrice){
      return this.products;
    }
    let gotProductByEndingPrice=products.filter(
      (product)=>{
        return product.productCost<=productEndingPrice;
      }
    )
    return gotProductByEndingPrice;
  }*/
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
  defineCartQuantity(){ 
    for(let i of this.cartProducts){
       this.cartMap.set(i,1)
      }
    for(let i of this.cartProducts){
       this.cartMap.set(i,this.cartMap.get(i)+1)
      }
    for(let i of this.cartMap){
       this.cartMap.set(i[0],i[1]-1)
      }
    }
}

