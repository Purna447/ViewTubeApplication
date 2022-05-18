import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SigninService } from '../services/signin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private signinService: SigninService,private router : Router) { }

  ngOnInit(): void {
  }

  login(userName: string,password: string)
  {
    if(this.signinService.login(userName,password)==true)
    this.router.navigate([this.signinService.redirectUrl]);
    
  }

}
