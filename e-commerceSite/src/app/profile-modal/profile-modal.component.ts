import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { validateUid } from '../login/userIdValidator';
import { User } from '../User';

@Component({
  selector: 'app-profile-modal',
  templateUrl: './profile-modal.component.html',
  styleUrls: ['./profile-modal.component.css']
})
export class ProfileModalComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:User) { }

  ngOnInit(): void {
    console.log(this.data);
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
  editUserDetails(){
    
  }
}
