import { Component, OnInit } from '@angular/core';
import { AuthGaurdService } from '../auth-gaurd.service';
import { Product } from '../Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private authGaurdService:AuthGaurdService,private productService:ProductService) { }
  products=this.productService.products;
  ngOnInit(): void {

  }
  logout(){
    this.authGaurdService.logout();
  }
  sortByRating(products:Product[]){
    products.sort((a,b)=>a<b?1:-1)
    return products;
  }
  
  Mens(){
    this.products=this.productService.getMensProducts();
    this.products=this.sortByRating(this.products);    
  }
  Womens(){
    this.products=this.productService.getWomensProducts();
    this.products=this.sortByRating(this.products);    
  }
  Kids(){
    this.products=this.productService.getKidsProducts();
    this.products=this.sortByRating(this.products);    
  }
  Electronics(){
    this.products=this.productService.getElectronicsProducts();
    this.products=this.sortByRating(this.products);    
  }
  pname!:string;
  startingPrice!:number;
  endingPrice!:number;
  filterByname(){
    this.products=this.productService.getProductByName(this.pname,this.products);
    this.products=this.sortByRating(this.products);    
  }
  filterByStartingPrice(){
    this.products=this.productService.getProductByStartingPrice(this.startingPrice,this.products);
    this.products=this.sortByRating(this.products);    
  }
  filterByEndingPrice(){
    this.products=this.productService.getProductByEndingPrice(this.endingPrice,this.products);
    this.products=this.sortByRating(this.products);    
  }
  filterByPriceRange(){
    this.products=this.productService.getProductByPriceRange(this.startingPrice,this.endingPrice,this.products);
    this.products=this.sortByRating(this.products);    
  }
}
