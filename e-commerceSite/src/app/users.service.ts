import { Injectable } from '@angular/core';
import { User } from './User';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }
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
}
