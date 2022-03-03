import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthGaurdService } from '../auth-gaurd.service';
import { EachProductDialogComponent } from '../each-product-dialog/each-product-dialog.component';
import { Product } from '../Product';
import { ProductService } from '../product.service';
import { ProfileModalComponent } from '../profile-modal/profile-modal.component';
import { UsersService } from '../users.service';
import { Options,LabelType } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private userService:UsersService,private authGaurdService:AuthGaurdService,
    private productService:ProductService,private dialogRef:MatDialog,private router:Router,
    private activatedRoute:ActivatedRoute) { }
  currentProductCategory!:Product[];
  products!:Product[];
  startingPrice: number = 10;
  endingPrice: number = 101000;
  options: Options = {
    floor: 0,
    ceil: 101000,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return "<b>Min price:</b> Rs " + value;
        case LabelType.High:
          return "<b>Max price:</b> Rs " + value;
        default:
          return "Rs" + value;
      }
    }
  };
  public isVisible: boolean = false;
  showAlert() : void {
    if (this.isVisible) { // if the alert is visible return
      return;
    } 
    this.isVisible = true;
    setTimeout(()=> this.isVisible = false,1000); // hide the alert after 1.0s
  }
  
  ngOnInit(): void {
    this.productService.getAllProducts().subscribe({
      next:(data)=>{
        this.currentProductCategory= data;
        this.products=data;
      },
      error:(err)=>{
        console.log(err);
      }
    });
  }
  logout(){
    this.authGaurdService.logout();
    this.productService.cartProducts=[];
    this.productService.cartMap.clear();
    this.productService.cartTotal=0;
    this.productService.productQuantity=[];
  }

  openProduct(product:Product){
    this.dialogRef.open(EachProductDialogComponent,{ data:product});
  }
  Mens(){
    this.productService.getMensProducts().subscribe({
      next:(data)=>{
        this.products=data;
        console.log(data);
        this.products=this.sortByRating(this.products);    
        this.currentProductCategory=this.products; 
      },
      error:(err)=>{
        console.log("error in getting mens product ");
        
      }
    });
  }
  Womens(){
    this.productService.getWomensProducts().subscribe({
      next:(data:any)=>{
        this.products=data;
        this.products=this.sortByRating(this.products);
        this.currentProductCategory=this.products;
      },
      error:(err)=>{
        console.log("error in category women products");
        console.log(err);
      }
    });    
  }
  Kids(){
    this.productService.getKidsProducts().subscribe({
      next:(data)=>{
        this.products=data;
        this.products=this.sortByRating(this.products);
        this.currentProductCategory=this.products;    
      },
      error:(err)=>{
        console.log(err);
        
      }
    });
  }
  Electronics(){
    this.productService.getElectronicsProducts().subscribe({
      next:(data)=>{
        this.products=data;
        this.products=this.sortByRating(this.products);    
        this.currentProductCategory=this.products;
      },
      error:(err)=>{
        console.log(err);
        
      }
    });
  }
  sortByRating(products:Product[]){
    products.sort((a,b)=> (a.rating < b.rating)?1:-1)
    return products;
  }
  pname!:string;
  filterByname(){
    this.products=this.productService.getProductByName(this.pname,this.currentProductCategory);
    this.products=this.sortByRating(this.products);    
  }
  
  filterByPriceRange(){
    this.products=this.productService.getProductByPriceRange(this.startingPrice,this.endingPrice,this.currentProductCategory);
    this.products=this.sortByRating(this.products);   
  }
  openProfile(){
    console.log(this.userService.currentUser);
    this.dialogRef.open(ProfileModalComponent,{ data:this.userService.currentUser});
  }
  goToCart(){ 
    this.activatedRoute.params.subscribe((data:any)=>{
      this.productService.defineCartQuantity();
      this.router.navigate(["/login/"+data.userId+"/cart"]);
    })
  }
  addToCart(product:Product){
    this.productService.cartProducts.push(product);
    this.productService.cartTotal+=product.productCost;
  }
}
