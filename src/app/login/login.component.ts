import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from  '../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  

  constructor(
    private router:Router,
    private authService :  AuthService
  ) { }

  ngOnInit() {
  }
  
  login(){
    const email = 'tawan@gmail.com';
    const password = '123456';

    this.authService.login(email, password).then(() => {
      this.router.navigate(['']);
    });
    
    console.log('hi');
  }

  register(){
    this.router.navigate(['/register']);
  }
}
