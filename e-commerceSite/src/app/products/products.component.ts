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
import { NotifyComponent } from '../notify/notify.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private userService:UsersService,private authGaurdService:AuthGaurdService,
    private productService:ProductService,private dialogRef:MatDialog,private router:Router,
    private activatedRoute:ActivatedRoute) { }
  //contains products of selected category
  currentProductCategory!:Product[];
  //contains products that are displayed on products page
  products!:Product[];
  //for the filtering by price range
  startingPrice: number = 10;
  endingPrice: number = 101000;
  //for ngxSlider
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
  
  ngOnInit(): void {
    //getting current User from Backend onloading of this component
    this.activatedRoute.params.subscribe((data:any)=>{
      this.userService.getCurrentUser(data.userId);
    })
    //getting all products From Backend not categorywise
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
    //if you logout of session cart will be emptied
    this.productService.cartProducts=[];
    this.productService.cartTotal=0;
    this.productService.productQuantity=[];
  }
  // for opening each product in dialog box
  openProduct(product:Product){
    this.dialogRef.open(EachProductDialogComponent,{ data:product});
  }
  //getting products by mens category from backend
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
    //getting products by Womens category from backend
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
    //getting products by kids category from backend
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
    //getting products by electronics category from backend
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
  //sorting products by rating is called when products by category
  sortByRating(products:Product[]){
    products.sort((a,b)=> (a.rating < b.rating)?1:-1)
    return products;
  }
  //filtering products by name
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
  yourOrders(){
    this.activatedRoute.params.subscribe((data:any)=>{
      this.router.navigate(["/login/"+data.userId+"/yourOrders"]);
    })
  }
  //adding product to carts array adding amount to total
  addToCart(product:Product){
    let dialogReference=this.dialogRef.open(NotifyComponent);
    dialogReference.afterOpened().subscribe(()=>{
      setTimeout(()=>{
        dialogReference.close()
      },300);
    })
    //if cart is empty then adding product to cart and return from function
        if(this.productService.cartProducts.length==0){
          this.productService.cartProducts.push(product);
          this.productService.productQuantity.push(1);
          this.productService.cartTotal+=product.productCost;
          return ;
        }
        //if product already exists in the cart then while adding we just need to increase there quantity 
        //and return from function 
        for(let i=0;i<this.productService.cartProducts.length;i++){
           if(product==this.productService.cartProducts[i]){
             this.productService.productQuantity[i]++;
             this.productService.cartTotal+=product.productCost;
             return ;
            }
          }
          //if new product that doesn't exist in cart then we need to add it to cart and return from function
          this.productService.cartProducts.push(product);
          this.productService.productQuantity.push(1);
          this.productService.cartTotal+=product.productCost;
    }
}
