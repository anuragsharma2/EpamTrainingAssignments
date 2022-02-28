import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(public productService:ProductService) { }
  cartProducts:any=[]
  productQuantity:any=[]
  ngOnInit(): void {
    for(let i of this.productService.cartMap){
      this.cartProducts.push(i[0]);
      this.productQuantity.push(i[1]);
    }
  }
  removeFromCart(product:Product){
    for(let i=0;i<this.cartProducts.length;i++){
      if(product==this.cartProducts[i]){
        if(this.productQuantity[i]>1){
          this.productQuantity[i]=this.productQuantity[i]-1;
          this.productService.cartMap.set(product,this.productService.cartMap.get(product)-1);
          this.productService.cartTotal= this.productService.cartTotal-product.productCost;
          for(let i=0;i<this.productService.cartProducts.length;i++){
            if(product==this.productService.cartProducts[i]){
              this.productService.cartProducts.splice(i,1);
              break;
            }
          }
        }
        else{
          this.cartProducts.splice(i,1);
          this.productQuantity.splice(i,1);
          this.productService.cartMap.delete(product);
          for(let i=0;i<this.productService.cartProducts.length;i++){
            if(product==this.productService.cartProducts[i]){
              this.productService.cartProducts.splice(i,1);
              break;
            }
          }
          this.productService.cartTotal= this.productService.cartTotal-product.productCost
        }
        return ;
      }
      console.log(this.productService.cartMap);
      
    }  
  }
}
