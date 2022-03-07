import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    //when cart component loads we get the currentUser from backend
    this.activatedRoute.params.subscribe((data:any)=>{
      this.userService.getCurrentUser(data.userId);
    });
  }
  removeFromCart(i:any){
    //if product quantity is more than 1 then we need to reduce its quantity, reduce from the cart total also
    if(this.productService.productQuantity[i]>1){
      this.productService.cartTotal=this.productService.cartTotal-this.productService.cartProducts[i].productCost;
      this.productService.productQuantity[i]--;
    }
    // else if product quantity is only one then remove the product from cart ,reduce from the cart total
    else{
      this.productService.cartTotal=this.productService.cartTotal-this.productService.cartProducts[i].productCost;
      this.productService.cartProducts.splice(i,1);
      this.productService.productQuantity.splice(i,1);
    }
  }
  placeOrder(){
    // storing the order in backend DB
    this.userService.storeOrder().subscribe({
      next:(data)=>{
        alert(data);
      },
      error:(err)=>{
        console.log(err);
      }
    });
    //for mailing the order to customer's email
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
