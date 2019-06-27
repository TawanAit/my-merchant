import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatListModule, MatRippleModule, MatToolbarModule } from '@angular/material';
import { HeaderModule } from '../header/header.module';
import { DashboardComponent } from './dashboard.component';



@NgModule({
  declarations: [
    DashboardComponent,
    
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatRippleModule,
    MatListModule,

   

    HeaderModule,
    
  ]
})
export class DashboardModule { }
