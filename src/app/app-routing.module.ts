import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeatComponent } from './seat/seat.component';
import { FlightsComponent } from './flights/flights.component';
import { PaymentComponent } from './payment/payment.component';
import { FlightsearchComponent } from './flightsearch/flightsearch.component';
import { BookingComponent } from './booking/booking.component';
const routes: Routes = [
  {path:'',redirectTo:'/booking',pathMatch:'full'},
{path:'flight',component:FlightsComponent},
{path:'flightsearch',component:FlightsearchComponent},
{path:'payment',component:PaymentComponent},
{path:'booking',component:BookingComponent},
{path:'seat',component:SeatComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
