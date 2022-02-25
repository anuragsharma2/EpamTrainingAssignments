import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthGaurdService } from '../auth-gaurd.service';
import { EachProductDialogComponent } from '../each-product-dialog/each-product-dialog.component';
import { Product } from '../Product';
import { ProductService } from '../product.service';
import { ProfileModalComponent } from '../profile-modal/profile-modal.component';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private userService:UsersService,private authGaurdService:AuthGaurdService,private productService:ProductService,private dialogRef:MatDialog,private router:Router) { }
  currentProductCategory=this.productService.products;
  products=this.productService.products;

  ngOnInit(): void {

  }
  logout(){
    this.authGaurdService.logout();
  }
  sortByRating(products:Product[]){
    products.sort((a,b)=>a.rating<b.rating?1:-1)
    return products;
  }
  openProduct(product:Product){
    this.dialogRef.open(EachProductDialogComponent,{ data:product});
  }
  Mens(){
    this.products=this.productService.getMensProducts();
    this.products=this.sortByRating(this.products);    
    this.currentProductCategory=this.products;
  }
  Womens(){
    this.products=this.productService.getWomensProducts();
    this.products=this.sortByRating(this.products);
    this.currentProductCategory=this.products;    
  }
  Kids(){
    this.products=this.productService.getKidsProducts();
    this.products=this.sortByRating(this.products);
    this.currentProductCategory=this.products;    
  }
  Electronics(){
    this.products=this.productService.getElectronicsProducts();
    this.products=this.sortByRating(this.products);    
    this.currentProductCategory=this.products;
  }
  pname!:string;
  startingPrice!:number|'';
  endingPrice!:number|'';
  filterByname(){
    this.products=this.productService.getProductByName(this.pname,this.currentProductCategory);
    this.products=this.sortByRating(this.products);    
  }
  
  filterByPriceRange(){
    this.products=this.productService.getProductByPriceRange(this.startingPrice,this.endingPrice,this.currentProductCategory);
    this.products=this.sortByRating(this.products);  
    this.startingPrice='';
    this.endingPrice='';  
  }
  openProfile(){
    this.dialogRef.open(ProfileModalComponent,{ data:this.userService.currentUser});
  }
  goToCart(){
    this.productService.defineCartQuantity();
    this.router.navigate(["/cart"]);
  }
  addToCart(product:Product){
    this.productService.cartProducts.push(product);
    this.productService.cartTotal+=product.productCost;
  }
}
