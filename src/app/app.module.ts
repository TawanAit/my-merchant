import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
<<<<<<< HEAD
import { AddressModule } from './address/address.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { LoginModule } from './login/login.module';
import { MerchantModule } from './merchant/merchant.module';
import { ProfileModule } from './profile/profile.module';
=======
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
>>>>>>> 24-may-2019
import { RegisterModule } from './register/register.module';





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
<<<<<<< HEAD
    AddressModule,
    ProfileModule,
    MerchantModule,
    
=======
    HomeModule,
>>>>>>> 24-may-2019
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
