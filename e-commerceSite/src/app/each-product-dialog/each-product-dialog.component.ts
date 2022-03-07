import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from '../Product';

@Component({
  selector: 'app-each-product-dialog',
  templateUrl: './each-product-dialog.component.html',
  styleUrls: ['./each-product-dialog.component.css']
})
export class EachProductDialogComponent implements OnInit {
  product!:Product;
  constructor(@Inject(MAT_DIALOG_DATA) public data:Product) { }
  ngOnInit(): void {
    // data contains single product details from which is clicked to br opened 
    this.product=this.data;
  }


}
