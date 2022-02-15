import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService {

  constructor(private router:Router) { }
  varIsLoggedIn="isLoggedIn";
  canActivate(){
    let breturn=true;
    if(localStorage.getItem(this.varIsLoggedIn)=='false'){
      breturn=false;
      alert(" Access Denied ");
      this.router.navigate(["/about"]);
    }
    return breturn;
  }
}
