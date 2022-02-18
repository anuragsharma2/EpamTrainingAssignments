import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute) { }
  parameters:any;
  ngOnInit(): void {
  }
  enteredUserId!:string;
  enteredPassword!:string;
  userId="anurag";
  password="admin";

}
