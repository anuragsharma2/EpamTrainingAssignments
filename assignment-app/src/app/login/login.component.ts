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
    this.activatedRoute.queryParams.subscribe(
      (param)=>{
        this.parameters=param;
        let strParam="id "+this.parameters.uid+" password "+this.parameters.password;
        alert(strParam);
      }
    );
  }

}
