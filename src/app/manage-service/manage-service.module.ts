import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageServiceComponent } from './manage-service.component';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    ManageServiceComponent
  ],
  
  imports: [
    CommonModule,
    MatTableModule
  ]
})
export class ManageServiceModule { }
