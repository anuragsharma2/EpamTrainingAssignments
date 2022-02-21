import { Injectable } from '@angular/core';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }
  users:User[]=[
    { id:1,userId:"anurag",firstName:"Anurag",lastName:"Sharma",password:"admin",emailId:"anuragww99@gmail.com",mobileNo:"",address:"",gender:"m"}
  ];
  currentUser!:User;
  checkCredentials(uid:string,password:string):boolean{
    for(let i=0;i<this.users.length;i++){
      if(this.users[i].userId==uid && this.users[i].password==password){
        this.currentUser=this.users[i];
        return true;  
      }  
    }
    return false;
  }
  getUser(uid:string,password:string){
    for(let i=0;i<this.users.length;i++){
      if(this.users[i].userId==uid && this.users[i].password==password)
        return this.users[i];  
    }
    return null; 
  }    
}
