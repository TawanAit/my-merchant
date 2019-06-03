import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MerchantComponent } from './merchant.component';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { HeaderModule } from '../header/header.module';



@NgModule({
  declarations: [
    MerchantComponent,
  ],


  imports: [
    CommonModule,
    MatCardModule,
    MatToolbarModule,
    MatInputModule,
    MatIconModule,
    HeaderModule,
  ]
})
export class MerchantModule { }
