import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material';
import { ManageServiceComponent } from './manage-service.component';
import { HeaderModule } from '../header/header.module';


@NgModule({
  declarations: [
    ManageServiceComponent
  ],
  
  imports: [
    CommonModule,
    MatToolbarModule,

    HeaderModule,
   
 

  ]
})
export class ManageServiceModule { }
