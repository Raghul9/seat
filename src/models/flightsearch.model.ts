import { Time } from "@angular/common";

export class Flight
{
    FlightId?:number;
     Flightname?:string ;
     MaxSeats? :number;
     MaxBaggage?: number;
     EconomyClassPrice ?:number; 
     BusinessClassPrice?:number;
     Departure ?:Time;
     Arrival ?:Time;
     Duration ?:string;
     Source ?:string;
     Destination?:string;
    
}