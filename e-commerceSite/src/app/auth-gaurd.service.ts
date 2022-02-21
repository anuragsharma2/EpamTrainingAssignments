import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService {

  constructor(private router:Router) { }
  varIsLoggedIn="isLoggedIn";
  canActivate(){
    let r=true;
    if(localStorage.getItem(this.varIsLoggedIn)=="false"){
      r=false;
    }
    return r;
  }
  login(){
    localStorage.setItem(this.varIsLoggedIn,"true");   
  }
  logout(){
    localStorage.setItem(this.varIsLoggedIn,"false");
    this.router.navigate(["/login"])   
  }
}
