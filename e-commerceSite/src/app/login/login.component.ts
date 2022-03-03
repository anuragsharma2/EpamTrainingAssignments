import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthGaurdService } from '../auth-gaurd.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private authGaurdService:AuthGaurdService,private usersService:UsersService) { }
  
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
    this.usersService.checkCredentials(this.loginForm.get('loginUserId')?.value,this.loginForm.get('loginPassword')?.value).subscribe({
      next:(data)=>{
        this.usersService.currentUser=JSON.parse(data)[0];
          alert("valid user");
          this.router.navigate(["login/"+this.usersService.currentUser.userId+"/products"]);
          this.authGaurdService.login(); 
      },
      error:(err)=>{
        console.log(err);
        alert("error in Login");
      }
    });
  }
  toRegister(){
    this.router.navigate(["/register"]);
  }
  
}
