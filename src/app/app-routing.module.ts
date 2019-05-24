import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressComponent } from './address/address.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
<<<<<<< HEAD
import { MerchantComponent } from './merchant/merchant.component';

const routes: Routes = [
  { path: 'address', component: AddressComponent },
  { path: 'dashbroard', component: DashboardComponent},
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'merchant', component: MerchantComponent},
  { path: '', component: DashboardComponent },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },

=======
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'home', component:HomeComponent},
>>>>>>> 24-may-2019
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
