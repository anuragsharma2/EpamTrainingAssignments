import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private userService:UsersService,private authGaurdService:AuthGaurdService,private productService:ProductService,private dialogRef:MatDialog,private router:Router,private route:ActivatedRoute) { }
  currentProductCategory!:Product[];
  products!:Product[];
  ngOnInit(): void {
    this.productService.getAllProducts().subscribe({
      next:(data)=>{
        this.currentProductCategory= data;
      },
      error:(err)=>{
        console.log(err);
      }
    });
    this.productService.getAllProducts().subscribe({
      next:(data)=>{
        this.products= data;
      },
      error:(err)=>{
        console.log(err);
      }
    });
  }
  logout(){
    this.authGaurdService.logout();
  }
  sortByRating(products:Product[]){
    products.sort((a,b)=>(a.rating > b.rating)?1:-1)
    return products;
  }
  openProduct(product:Product){
    this.dialogRef.open(EachProductDialogComponent,{ data:product});
  }
  Mens(){
    this.productService.getMensProducts().subscribe({
      next:(data)=>{
        this.products=data;
      },
      error:(err)=>{
        console.log("error in getting mens product ");
        
      }
    });
    this.products=this.sortByRating(this.products);    
    this.currentProductCategory=this.products;
  }
  Womens(){
    this.productService.getWomensProducts().subscribe({
      next:(data:any)=>{
        this.products=data;
      },
      error:(err)=>{
        console.log("error in category women products");
        console.log(err);
      }
    });
    this.products=this.sortByRating(this.products);
    this.currentProductCategory=this.products;    
  }
  Kids(){
    this.productService.getKidsProducts().subscribe({
      next:(data)=>{
        this.products=data;
      },
      error:(err)=>{
        console.log(err);
        
      }
    });
    this.products=this.sortByRating(this.products);
    this.currentProductCategory=this.products;    
  }
  Electronics(){
    this.productService.getElectronicsProducts().subscribe({
      next:(data)=>{
        this.products=data;
      },
      error:(err)=>{
        console.log(err);
        
      }
    });
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
    console.log(this.userService.currentUser);
    this.dialogRef.open(ProfileModalComponent,{ data:this.userService.currentUser});
  }
  goToCart(){
    this.productService.defineCartQuantity();
    this.router.navigate(["/login/cart"]);
  }
  addToCart(product:Product){
    this.productService.cartProducts.push(product);
    this.productService.cartTotal+=product.productCost;
  }
}
