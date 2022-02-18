import { AbstractEmitterVisitor } from '@angular/compiler/src/output/abstract_emitter';
import { Component } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { LoggerService } from './logger.service';
import { Product } from './Product';
import { ProductService } from './product.service';

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
  employees=[
    { eid:'1' ,name:"amit" ,location:"bharatpur", department: "cse", designation:"student"},
    { eid:'2' ,name:"ojas" ,location:"agra", department: "pcb", designation:"student"},
    { eid:'3' ,name:"anand" ,location:"kanpur", department: "IT", designation:"SE"},
    { eid:'4' ,name:"harshit" ,location:"mathura", department: "mechanical", designation:"student"}
  ]
  displayEmployeesTable=false;
  addEmployeeForm=false;
  displayEditEmployeeForm=false;
  displayUsersTable=false;
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
        this.displayEmployeesTable=true;
        alert("user login successfull");
        return ;
      }
    }
    alert("Invalid UserID and Password ")
  }
  user= { uid:"" ,password:""}
  makeObj(uid:string,password:string):any{
    this.user.uid=uid;
    this.user.password=password;
    return this.user;
  }
  employee={ eid:"",name:"",location: "",department:"",designation:""};
  makeEmployeeObj(eid:string,name:string,location:string,department:string,designation:string){
    this.employee.eid=eid;
    this.employee.name=name;
    this.employee.location=location;
    this.employee.department=department;
    this.employee.designation=designation;
    return this.employee;
  }
  register(uid:string,password:string){
    this.makeObj(uid,password);
    this.users.push(this.user);
  }
  deleteEmployee(index:number){
    this.employees.splice(index,1);
  }
  currentEditIndex:number=0;
  editEmployee(index:number){
    this.displayEditEmployeeForm=true;
    this.currentEditIndex=index;
  }
  updateEmployee(){
    this.displayEditEmployeeForm=false;
  }
  createEmployee(eid:string,name:string,location:string,department:string,designation:string){
    let emp=this.makeEmployeeObj(eid,name,location,department,designation);
    this.employees.push(emp);
    this.addEmployeeForm=false;
  }
  addEmployee(){
    this.addEmployeeForm=true;
  }
  deleteUser(index:number){

  }
  editUser(index:number){
    
  }
  strLoginId="anurag";
  strLoginPassword="1234";
  constructor(private productService : ProductService,private logger:LoggerService,private authService:AuthenticationService){}
  loginUser(){
    
  }

}
