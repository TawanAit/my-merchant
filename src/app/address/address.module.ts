import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material';
import { AddressComponent } from './address.component';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HeaderModule } from '../header/header.module';






@NgModule({
  declarations: [
    AddressComponent,

  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,



    HeaderModule,



  ]
})
export class AddressModule { }
