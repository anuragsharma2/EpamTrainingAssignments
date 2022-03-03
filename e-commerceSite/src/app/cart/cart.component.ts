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
    this.userService.mailOrderDetails().subscribe({
      next:(data)=>{
        console.log(data);
        alert("Order Placed Email sent to your emailId "+this.userService.currentUser.emailId);
        this.activatedRoute.params.subscribe((data:any)=>{
          this.router.navigate(["/login/"+data.userId+"/orderSuccessfull"]);
        })
      },
      error:(err)=>{
        console.log(err);
      }
    });
  }
}
