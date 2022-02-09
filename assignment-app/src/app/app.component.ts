import { AbstractEmitterVisitor } from '@angular/compiler/src/output/abstract_emitter';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment-app';
  obj={
    "name":"Anurag",
    "location": "Agra",
    "degree":"BE",
    "interest":"playing",
    "height": 5.10,
    "goodOrNot": true,
    "likedFood":"home made"
  }
  img1Url="./assets/img1.jpg";
  img2Url="./assets/img2.jpg";
  img3Url="./assets/img3.jpg";
  validate(pno:string){
    if(pno.length!=10)
      alert("Invalid phone number, please enter phone number with 10 digits")
  }
  
  strColor="red";
  strWidth="300";
  strHeight="300";
  strFontSize=12;
  strFontColor="black";
  users=[
    { uid:"amit" ,password:"1234"},
    { uid:"ojas" ,password:"0987"},
    { uid:"anand" ,password:"12345"}
  ]
  displayTable=false;
  bLogin=true;
  bRegister=false;
  changeToLogin(){
    this.bLogin=true;
    this.bRegister=false;
  }
  changeToRegister(){
    this.bLogin=false;
    this.bRegister=true;
  }
  login(uid:string,password:string){
    for(let user of this.users){
      if(user.uid==uid && user.password==password){
        this.displayTable=true;
        return ;
      }
      alert("Invalid UserID and Password ")
    }
  }
  user= { uid:"" ,password:""}
  makeObj(uid:string,password:string):any{
    this.user.uid=uid;
    this.user.password=password;
    return this.user;
  }
  register(uid:string,password:string){
    this.makeObj(uid,password);
    this.users.push(this.user);
  }
  deleteUser(index:number){
    this.users.splice(index,1);
  }
  editUser(index:number){
    
  }
}
