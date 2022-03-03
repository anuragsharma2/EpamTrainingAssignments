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
  checkCredentials(userId:string,password:string):Observable<any>{
    let url=this.baseUrl+"validateUser";
    let header={'content-type':'application/json'};
    let body=JSON.stringify({userId:userId,password:password});
    return this.http.post(url,body,{'headers':header,responseType:'text'});
  }
  mailOrderDetails():Observable<any>{
    let url=this.baseUrl+"sendEmail";
    let header={'content-type':'application/json'};
    let body=JSON.stringify({order:this.productService.orderBackendArray,user:this.currentUser});
    return this.http.post(url,body,{'headers':header,responseType:'text'});
  }
}
