import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HeaderModule } from '../header/header.module';



@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,

    HeaderModule,
  ]
})
export class HomeModule { }
