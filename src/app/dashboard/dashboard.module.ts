import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatRippleModule, MatToolbarModule, MatListModule } from '@angular/material';
import { DashboardComponent } from './dashboard.component';
import { HeaderModule } from '../header/header.module';


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
