import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthGaurdService } from '../auth-gaurd.service';
import { User } from '../User';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private authGaurdService:AuthGaurdService,private users:UsersService) { }
  
  ngOnInit(): void {
  }
  
  viewLoginForm=true;
  viewRegisterForm=false;
  userId!:string
  password!:string;
 
  loginForm=new FormGroup({
    loginUserId:new FormControl('',[ Validators.minLength(3),Validators.required ] ),
    loginPassword:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(8)]),
  });
  loginUser(){
    if(true==this.users.checkCredentials(this.loginForm.get('loginUserId')?.value,this.loginForm.get('loginPassword')?.value)){
        this.router.navigate(["/product"]);
        this.authGaurdService.login();
        return ;
      }
    alert("Invalid Credentials");
  }
  toRegister(){
    this.router.navigate(["/register"]);
  }
  
}
