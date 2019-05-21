import { Component, OnInit } from '@angular/core';

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
    30000,
    3000,
    300,
    30,
    3,
    'Hello',
    
  ];


  constructor() {

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


}
