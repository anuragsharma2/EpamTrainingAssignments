import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';
import { Product } from '../Product';
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

  arrProductList!:Product[];
  getAllProductsUsingProductService(){
    this.logger.info("before printing table ");
    this.arrProductList=this.productService.getAllProducts();
    if(this.arrProductList==undefined)
      this.logger.error;
    this.logger.info("after printing table ");
  }
  productId!:number;
  productName!:string;
  productCost!:number;
  productDescription!:string;
  getProductByNameFromProductServices(){
    this.arrProductList=this.productService.getProductByName(this.productName);
  }  
  getProductByIdFromProductServices(){
    this.arrProductList=this.productService.getProductById(this.productId);
  }
  getProductByCostFromProductServices(){
    this.arrProductList=this.productService.getProductByCost(this.productCost);
  }
  getProductByDescriptionFromProductServices(){
    this.arrProductList=this.productService.getProductByDescription(this.productDescription);
  }
  getProductByAllFiltersFromProductServices(){
    this.arrProductList=this.productService.getProductByAll(this.productId,this.productName,this.productCost,this.productDescription);
  }

}
