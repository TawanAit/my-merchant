import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from 'src/environments/environment';
import { AddressModule } from './address/address.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { MerchantModule } from './merchant/merchant.module';
import { ProfileModule } from './profile/profile.module';
import { RegisterModule } from './register/register.module';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { ManageServiceComponent } from './manage-service/manage-service.component';
import { ManageServiceModule } from './manage-service/manage-service.module';
import { HeaderComponent } from './header/header.component';
import { HeaderModule } from './header/header.module';



@NgModule({
  declarations: [
    AppComponent,
    
    

  ],
  imports: [
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AppRoutingModule,

    
    LoginModule,
    DashboardModule,
    RegisterModule,
    AddressModule,
    ProfileModule,
    MerchantModule,
    HomeModule,
    ManageServiceModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
