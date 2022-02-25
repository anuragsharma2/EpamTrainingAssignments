import { Component, OnInit } from '@angular/core';
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
}
