import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from  '../services/auth.service';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  fromgroup: FormGroup;
  

  constructor(
    private router:Router,
    private authService :  AuthService,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.fromgroup = this.fb.group({
      email:['tawan@gmail.com'],
      password:['123456'],
    })
  }
  
  login(){
    const email = this.fromgroup.controls.email.value;
    const password = this.fromgroup.controls.password.value;

    this.authService.login(email, password).then(() => {
      this.router.navigate(['/dashboard']);
    }).catch((reson)=>{
      alert ("reson");
    });
    // this.authService.anonymousLogin().then(() =>{
    //   this.router.navigate(['/play']);
    // })


  

  }
  

  register(){
    this.router.navigate(['/register']);
  }
}
