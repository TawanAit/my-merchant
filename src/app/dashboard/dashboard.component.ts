import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private router:Router 
  ) { }

  ngOnInit() {
  }

  logout(){
    this.router.navigate(['/login']);
  }

  home(){
    this.router.navigate(['/home']);
  }

  profile(){
    this.router.navigate(['/profile']);
  }

  address(){
    this.router.navigate(['/address'])
  }
}
