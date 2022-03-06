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
  removeFromCart(i:any){
    if(this.productService.productQuantity[i]>1){
      this.productService.cartTotal=this.productService.cartTotal-this.productService.cartProducts[i].productCost;
      this.productService.productQuantity[i]--;
    }
    else{
      this.productService.cartTotal=this.productService.cartTotal-this.productService.cartProducts[i].productCost;
      this.productService.cartProducts.splice(i,1);
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
              alert("Order Placed Email sent to your emailId "+this.userService.currentUser.emailId +" removing from cart");
              this.productService.cartProducts=[];
              this.productService.cartTotal=0;
              this.productService.productQuantity=[];
              this.productService.orderBackendArray=[];
              },
              error:(err)=>{
                console.log(err);
              }
            }
          )
  }
}
