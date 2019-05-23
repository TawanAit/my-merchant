import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  items = [
    5000,
    500,
    50,
    5,
  ];

  services: any[] = [
    { name: 'ภาษาไทย', price: 5000 },
    { name: 'ภาษาอังกฤษ', price: 3000 },
    { name: 'ภาษาจีน', price: 2000 },
  ];

  totals: any[] = [
    {n: 'ffff', i: 300},
    {n: 'aaaa', i: 1000},
    {n: 'pppp', i: 5700}
    
  ];


  constructor(
    private router:Router
  ) {

  }
  ngOnInit() {

  }

  clickItem(item:any) {
    alert(item);
  }
  clickservices(service: any) {
    alert(`${service.name} ${service.price}`)
  }

  clickTotal(total:any){
    alert(total);
  }

  logout(){
    this.router.navigate(['/login']);
  }


}
