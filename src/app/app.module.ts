import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlightsComponent } from './flights/flights.component';
import { SeatComponent } from './seat/seat.component';
import { PaymentComponent } from './payment/payment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlightsearchComponent } from './flightsearch/flightsearch.component';
import { flightsearchService } from 'src/Services/flight.service';
import { paymentService } from 'src/Services/payment.service';
import { RegistrationComponent } from './registration/registration.component';
import { BookingComponent } from './booking/booking.component';



@NgModule({
  declarations: [
    AppComponent,
    SeatComponent,
    FlightsComponent,
    PaymentComponent,
    FlightsearchComponent,
    RegistrationComponent,
    BookingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [flightsearchService,paymentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
