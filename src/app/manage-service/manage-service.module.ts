import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material';
import { ManageServiceComponent } from './manage-service.component';


@NgModule({
  declarations: [
    ManageServiceComponent
  ],
  
  imports: [
    CommonModule,
    MatToolbarModule,
   
 

  ]
})
export class ManageServiceModule { }
