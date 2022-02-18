import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthGaurdService } from '../auth-gaurd.service';
import { User } from '../User';
import { validateUid } from './userIdValidator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private authGaurdService:AuthGaurdService) { }
  users=[
    { id:1,userId:"anurag",password:"admin",mobileNo:"",emailId:"anuragww99@gmail.com",address:""}
  ];
  ngOnInit(): void {
  }
  
  viewLoginForm=true;
  viewRegisterForm=false;
  userId!:string
  password!:string;
  registerForm=new FormGroup({
    registerUserId:new FormControl('',[ Validators.minLength(3),Validators.required ] ),
    registerPassword:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(8)]),
    emailId:new FormControl('',[validateUid,Validators.required]),
    mobileNo:new FormControl('',[Validators.minLength(10),Validators.maxLength(10)]),
    address:new FormControl(null,[Validators.required]),
    gender:new FormControl(null)
  });
  loginForm=new FormGroup({
    loginUserId:new FormControl('',[ Validators.minLength(3),Validators.required ] ),
    loginPassword:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(8)]),
  });
  loginUser(){
    for(let i=0;i<this.users.length;i++){
      if(this.users[i].userId==this.loginForm.get('loginUserId')?.value && this.users[i].password==this.loginForm.get('loginPassword')?.value){
        this.router.navigate(["/product"]);
        this.authGaurdService.login();
        return ;
      }
    }
    alert("Invalid Credentials");
  }
  toRegister(){
    this.viewRegisterForm=true;
    this.viewLoginForm=false;
  }
  toLogin(){
    this.viewRegisterForm=false;
    this.viewLoginForm=true;
  }
  register(){
    let user:User=new User(this.users[this.users.length-1].id+1,this.registerForm.get('registerUserId')?.value,this.registerForm.get('registerPassword')?.value,this.registerForm.get('emailId')?.value,this.registerForm.get('mobileNo')?.value,this.registerForm.get('address')?.value,this.registerForm.get('gender')?.value);
    this.users.push(user);
    this.viewRegisterForm=false;
    this.viewLoginForm=true;
  }
}
