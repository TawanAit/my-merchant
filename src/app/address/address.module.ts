import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HeaderModule } from '../header/header.module';
import { AddressComponent } from './address.component';





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

    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,




  ]
})
export class AddressModule { }
