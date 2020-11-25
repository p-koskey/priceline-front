import { MidcarsComponent } from './midcars/midcars.component';
import { SmallcarsComponent } from './smallcars/smallcars.component';
import { LoginComponent } from './login/login.component';
import { PaymentComponent } from './payment/payment.component';
import { CategoriesComponent } from './categories/categories.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LargecarsComponent } from './largecars/largecars.component';
import { AmbulanceComponent } from './ambulance/ambulance.component';
// import { BookingComponent } from './booking/booking.component';
import { ViewcarComponent } from './viewcar/viewcar.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'payment', component: PaymentComponent},
  { path: 'login', component: LoginComponent},
  { path: 'categories', component: CategoriesComponent},
  { path: 'admin', component:AdminComponent},
  { path: 'smallcars', component:SmallcarsComponent},
  { path: 'midcars', component:MidcarsComponent},
  { path: 'largecars', component:LargecarsComponent},
  { path: 'ambulance', component:AmbulanceComponent},
  { path: 'view/:id', component:ViewcarComponent},
  // { path: 'book/:id', component:BookingComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
