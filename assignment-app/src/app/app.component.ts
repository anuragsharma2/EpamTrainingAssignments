import { Component } from '@angular/core';

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
  validateLogin(uid:string,pwd:string){
    if(uid=="Anurag" && pwd=="123")
      alert("Valid User");
    else
      alert("Invalid user.  Please enter the correct credentials")
  }
}
