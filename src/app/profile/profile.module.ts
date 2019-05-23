import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { ProfileComponent } from './profile.component';
import {MatButtonModule} from '@angular/material/button';




@NgModule({
  declarations: [
    ProfileComponent

  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
  ]
})
export class ProfileModule { }
