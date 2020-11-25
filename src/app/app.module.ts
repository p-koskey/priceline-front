import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component'
import { PaymentComponent } from './payment/payment.component';
import { CategoriesComponent } from './categories/categories.component';
import { FooterComponent } from './footer/footer.component';
import { AdminComponent } from './admin/admin.component';
import { SmallcarsComponent } from './smallcars/smallcars.component';
import { LargecarsComponent } from './largecars/largecars.component';
import { MidcarsComponent } from './midcars/midcars.component';
import { AmbulanceComponent } from './ambulance/ambulance.component';
// import { BookingComponent } from './booking/booking.component';
import { ViewcarComponent } from './viewcar/viewcar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    PaymentComponent,
    CategoriesComponent,
    FooterComponent,
    AdminComponent,
    SmallcarsComponent,
    LargecarsComponent,
    MidcarsComponent,
    AmbulanceComponent,
    // BookingComponent,
    ViewcarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
