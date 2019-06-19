import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from "@angular/router";
import { User } from 'firebase';

@Injectable()
export class AuthService {
  user: User;


  constructor(
    private afAuth: AngularFireAuth,
    private router: Router
  ) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        localStorage.setItem('user', null);
      }
    })
  }
//basic authentication คือการล็อคอินผ่านทาง อีเมล password ที่สร้างขึ้นมาเอง
  async login(email: string, password: string): Promise<void> {
    await this.afAuth.auth.signInWithEmailAndPassword(email, password)
  }

  anonymousLogin(){
    return this.afAuth.auth.signInAnonymously();

  }
}
