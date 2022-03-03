import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-your-orders',
  templateUrl: './your-orders.component.html',
  styleUrls: ['./your-orders.component.css']
})
export class YourOrdersComponent implements OnInit {

  constructor(private productService:ProductService) { }
  previousOrder="";
  ngOnInit(): void {
    this.productService.getPreviousOrders().subscribe({
      next:(data)=>{
        this.previousOrder=data;
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
  

}
