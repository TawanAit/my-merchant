import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddressModule } from './address/address.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { ProfileComponent } from './profile/profile.component';
import { ProfileModule } from './profile/profile.module';





@NgModule({
  declarations: [
    AppComponent,
  
    
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    
    
    
    LoginModule,
    DashboardModule,
    RegisterModule,
    AddressModule,
    ProfileModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
