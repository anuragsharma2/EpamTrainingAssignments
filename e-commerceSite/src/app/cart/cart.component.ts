import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../Product';
import { ProductService } from '../product.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(public productService:ProductService,private userService:UsersService,
    private activatedRoute:ActivatedRoute,private router:Router) { }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data:any)=>{
      this.userService.getCurrentUser(data.userId);
    });
  }
  removeFromCart(product:Product){
    for(let i=0;i<this.productService.cartProducts.length;i++){
      if(product==this.productService.cartProducts[i]){
        if(this.productService.productQuantity[i]>1){
          this.productService.productQuantity[i]=this.productService.productQuantity[i]-1;
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
          this.productService.cartProducts.splice(i,1);
          this.productService.productQuantity.splice(i,1);
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
    }  
  }
  placeOrder(){
    this.userService.storeOrder().subscribe({
      next:(data)=>{
        alert(data);
      },
      error:(err)=>{
        console.log(err);
      }
    });
          this.userService.mailOrderDetails().subscribe({
            next:(data)=>{
              this.router.navigate(["/login/"+this.userService.currentUser.userId+"/orderSuccessfull"]);
              alert("Order Placed Email sent to your emailId "+this.userService.currentUser.emailId);
              },
              error:(err)=>{
                console.log(err);
              }})
    this.productService.cartProducts=[];
    this.productService.cartMap.clear();
    this.productService.cartTotal=0;
    this.productService.productQuantity=[];
  }
}
