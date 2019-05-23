import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-merchant',
  templateUrl: './merchant.component.html',
  styleUrls: ['./merchant.component.scss']
})
export class MerchantComponent implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit() {
  }

  logout(){
    this.router.navigate(['/profile']);
  }
}
