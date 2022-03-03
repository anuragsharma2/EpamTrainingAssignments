import { Injectable } from '@angular/core';
import { User } from './User';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient,private productService:ProductService) { }
  currentUser!:User;
  baseUrl="http://localhost:8001/";
  createUser(user:User):Observable<any>{
    let url=this.baseUrl+"createUser";
    let header={'content-type':'application/json'};
    let body=JSON.stringify(user);
    return this.http.post(url,body,{'headers':header,responseType:'text'});
  }
  getCurrentUser(userId:any){
    this.getUserByUserId(userId).subscribe((data)=>{
      this.currentUser=data[0];  
    });
  }
  getUserByUserId(userId:any):Observable<any>{
    let url=this.baseUrl+"getUserByUserId/"+userId;
    return this.http.get(url);
  }
  checkCredentials(userId:string,password:string):Observable<any>{
    let url=this.baseUrl+"validateUser";
    let header={'content-type':'application/json'};
    let body=JSON.stringify({userId:userId,password:password});
    return this.http.post(url,body,{'headers':header,responseType:'text'});
  }
  storeOrder():Observable<any>{
    let url=this.baseUrl+"storeOrder";
    let header={'content-type':'application/json'};
    let order=[];
    for(let i=0;i<this.productService.orderBackendArray.length;i++){
      order.push({productId:this.productService.orderBackendArray[i].product.id,quantity:this.productService.orderBackendArray[i].quantity,userId:this.currentUser.userId})
    }
    let body=JSON.stringify({"order":order})
    return this.http.post(url,body,{'headers':header,responseType:'text'});
  }
  mailOrderDetails():Observable<any>{
    console.log("inside service"+this.currentUser);
    let url=this.baseUrl+"sendEmail";
    let header={'content-type':'application/json'};
    let body=JSON.stringify({order:this.productService.orderBackendArray,user:this.currentUser});
    return this.http.post(url,body,{'headers':header,responseType:'text'});
  }
}
