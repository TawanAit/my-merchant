import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-service',
  templateUrl: './manage-service.component.html',
  styleUrls: ['./manage-service.component.scss'],
  
})
export class ManageServiceComponent implements OnInit{ 

  constructor(
    private router:Router
  ) { }

  ngOnInit() {
  }

  logout(){
    this.router.navigate(['/login'])
  }
}
