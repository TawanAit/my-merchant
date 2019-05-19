import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatInputModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RegisterComponent } from './register.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';







@NgModule({
  declarations: [
    RegisterComponent,



  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule, 
    MatInputModule,
    MatIconModule,
    RouterModule
    
  



  ]
})
export class RegisterModule { }

