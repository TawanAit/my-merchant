import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {
  form: FormGroup;

  constructor(
    private router:Router,
    private formBuilder: FormBuilder
  ) { }
  //การประกาศการรับค่า ที่ตัวแปร
  ngOnInit() {
    this.form = this.formBuilder.group({
      firstName: [''],
      lastName:[''],
    });
//นี่คือ <form> ที่ controls.firstName ที่มีการเปลี่ยนแปลงค่า ให้แสดงค่าออกมาให้เห็น 
    this.form.controls.firstName.valueChanges.subscribe(value => {
      console.log(value);
    });

    this.form.controls.lastName.valueChanges.subscribe(value => {
      console.log(value);
    });
  }
  
    



  // logout(){
  //   this.router.navigate(['/login']);
  // }
}



var tawan = ["A","B","C"]
console.log(tawan);
