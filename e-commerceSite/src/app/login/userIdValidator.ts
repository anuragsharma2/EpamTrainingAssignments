import { AbstractControl } from "@angular/forms";

export function validateUid(control:AbstractControl){
    if(!control.value.endsWith('.com')){
      return {invalidUid:true};
    }
    return null;
  }