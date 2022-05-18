import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }
  login()
  {
      this.route.navigate(['authentication/', 'login']);
  }
  
  check(pwd:any,confirm:any)
  {
      if(pwd!=confirm)
      {
        alert("please check whether your password and confirm password fields are same");
      }

  }
}
