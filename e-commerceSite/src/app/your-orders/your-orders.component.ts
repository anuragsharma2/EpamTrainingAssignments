import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-your-orders',
  templateUrl: './your-orders.component.html',
  styleUrls: ['./your-orders.component.css']
})
export class YourOrdersComponent implements OnInit {

  constructor(private productService:ProductService,private activatedRoute:ActivatedRoute,private userService:UsersService) { }
  previousOrder="";
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data:any)=>{
      this.userService.getCurrentUser(data.userId);
    })
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
