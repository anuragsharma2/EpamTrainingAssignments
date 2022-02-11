import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }
  info(message:string){
    console.log("info " + message+ " "+new Date());
  }
  warning(){
    console.warn("warn "+new Date());
  }
  error(){
    console.error("error "+new Date());
  }
}
