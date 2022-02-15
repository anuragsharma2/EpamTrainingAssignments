import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private productService:ProductService,private logger:LoggerService) { }

  ngOnInit(): void {
  }

  arrProductList!:any;
  getAllProductsUsingProductService(){
    this.logger.info("before printing table ");
    this.productService.getAllProducts().subscribe(
      (products)=>{ this.arrProductList= products },
      ()=>{ this.logger.error;}
    );
    if(this.arrProductList==undefined)
    this.logger.info("after printing table ");
  }
  productId!:number;
  productName!:string;
  productCost!:number;
  productDescription!:string;
  getProductByNameFromProductServices(){
    this.productService.getProductByName(this.productName).subscribe(
      (products)=>{
        this.arrProductList=products;
      },
      ()=>{ console.log("DB not on")}
    );
  }  
  getProductByIdFromProductServices(){
    this.productService.getProductById(this.productId).subscribe(
      (products)=>{ this.arrProductList=products; },
      ()=>{ console.log("DB not on")}
    );
  }
  getProductByCostFromProductServices(){
    this.productService.getProductByCost(this.productCost).subscribe(
      (products)=>{
        this.arrProductList=products;
      }
    );
  }
  getProductByDescriptionFromProductServices(){
    this.arrProductList=this.productService.getProductByDescription(this.productDescription);
  }
  getProductByAllFiltersFromProductServices(){
    this.productService.getProductByAll(this.productId,this.productName,this.productCost,this.productDescription).subscribe(
      (products)=>{ this.arrProductList=products;}
    );
  }

}
