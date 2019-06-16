import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressComponent } from './address/address.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MerchantComponent } from './merchant/merchant.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { ManageServiceComponent } from './manage-service/manage-service.component';
import { PlayComponent } from './play/play.component';




const routes: Routes = [
  { path: 'address', component: AddressComponent },
  { path: 'login', component: LoginComponent },
  // { path: 'profile', component: ProfileComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'merchant', component: MerchantComponent},
  // { path: 'manage-service', component:ManageServiceComponent},
  { path: 'home', component:HomeComponent},
  { path: 'dashboard', children:[
    { path: 'profile', component:ProfileComponent},
    { path: 'services', component:ManageServiceComponent},
    
  ]},
  { path: 'play',component:PlayComponent},
  { path: '**', redirectTo: 'play', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }


