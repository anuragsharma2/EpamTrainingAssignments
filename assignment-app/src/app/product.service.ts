import { Injectable } from '@angular/core';
import { Product } from './Product';

@Injectable({
  providedIn: 'root' //appmodule
})
export class ProductService {

  constructor() { }
  ProductList:Product[] =[
    {productId:201, productName:"android",productCost: 20000,productDescription:"android phone"},
    {productId:202, productName:"TV",productCost: 40000,productDescription:"sony TV"},
    {productId:203, productName:"Cycle",productCost: 3000,productDescription:"gear cycle"},
    {productId:204, productName:"Car",productCost: 1500000,productDescription:"electric Car"},
    {productId:205, productName:"Truck",productCost: 2000000,productDescription:"Truck"},
  ]
  
  getAllProducts(){
    return this.ProductList;
  }
  getProductById(id:number){
    let gotProductById:Product[]=this.ProductList.filter((product)=>{ 
      return product.productId == id;
     })
     return gotProductById;
  }
  getProductByCost(cost:number){
    let gotProductByCost:Product[]=this.ProductList.filter((product)=>{ 
      return product.productCost == cost;
     })
     return gotProductByCost;
  }
  getProductByName(name:string){
    let gotProductByName:Product[]=this.ProductList.filter((product)=>{
      return product.productName.toUpperCase().includes(name.toUpperCase());
    });
    return gotProductByName;
  }
  getProductByDescription(description:string){
    let gotProductByDescription:Product[]=this.ProductList.filter((product)=>{
      return product.productDescription.toUpperCase().includes(description.toUpperCase());
    });
    return gotProductByDescription;
  }
  getProductByAll(id:number,name:string,cost:number,description:string){
    let gotProductsByAll= this.ProductList.filter((product)=>{
      return product.productId==id && product.productName==name && product.productCost==cost && product.productDescription==description;
    })
    return gotProductsByAll;
  }
}
