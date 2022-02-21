import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { validateUid } from '../login/userIdValidator';
import { User } from '../User';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router:Router,private users:UsersService) { }

  ngOnInit(): void {
  }

  registerForm=new FormGroup({
    registerUserId:new FormControl('',[ Validators.minLength(3),Validators.required ] ),
    firstName:new FormControl(null),
    lastName:new FormControl(null),
    registerPassword:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(8)]),
    emailId:new FormControl('',[validateUid,Validators.required]),
    mobileNo:new FormControl('',[Validators.minLength(10),Validators.maxLength(10)]),
    address:new FormControl(null,[Validators.required]),
    gender:new FormControl(null)
  });
  register(){
    let user:User=new User(this.users.users[this.users.users.length-1].id+1,this.registerForm.get('registerUserId')?.value,this.registerForm.get('firstName')?.value,this.registerForm.get('lastName')?.value,this.registerForm.get('registerPassword')?.value,this.registerForm.get('emailId')?.value,this.registerForm.get('mobileNo')?.value,this.registerForm.get('address')?.value,this.registerForm.get('gender')?.value);
    this.users.users.push(user);
    this.router.navigate(["/login"]);
  }
  toLogin(){
    this.router.navigate(["/login"]);
  }
}
