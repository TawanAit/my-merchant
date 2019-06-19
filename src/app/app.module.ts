import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from 'src/environments/environment';
import { AddressModule } from './address/address.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { ManageServiceModule } from './manage-service/manage-service.module';
import { MerchantModule } from './merchant/merchant.module';
import { PlayComponent } from './play/play.component';
import { ProfileModule } from './profile/profile.module';
import { RegisterModule } from './register/register.module';
import { MatCardModule } from '@angular/material';





@NgModule({
  declarations: [
    AppComponent,
    PlayComponent,
    
    

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

    
    MatCardModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
