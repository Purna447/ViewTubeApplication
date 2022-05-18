import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  constructor() { }
  isLoggedIn: boolean = false;
  // isUserAdmin: boolean = false;

  redirectUrl: string = "";

  login(name: string,password:string) {
    if(name.includes('purna') && password.includes('purna'))
    {
     return  this.isLoggedIn = true;
    }
    else
    {
      alert("User name or password is incorrect");
    return false;
    
    }
    //return this.isUserAdmin = name.startsWith('purna') && password.startsWith('123');
  }
  
}
