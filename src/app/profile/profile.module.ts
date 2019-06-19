import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { ProfileComponent } from './profile.component';
import { MatButtonModule} from '@angular/material/button';
import { HeaderModule } from '../header/header.module';




@NgModule({
  declarations: [
    ProfileComponent

  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,

    HeaderModule,
  ]
})
export class ProfileModule { }
