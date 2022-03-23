import { Component, OnInit } from '@angular/core';
import { flightsearchService } from 'src/Services/flight.service';
import { Flight } from 'src/models/flightsearch.model';


@Component({
  selector: 'app-flightsearch',
  templateUrl: './flightsearch.component.html',
  styleUrls: ['./flightsearch.component.css']
})
export class FlightsearchComponent implements OnInit {
  SearchFlight: any={};
  

  constructor(private flightservice:flightsearchService) { }

  ngOnInit(): void {
    this.fetchFlight();
  }
  flightinfo:any;

 

  fetchFlight()
  {
    
     this.flightservice.getFlight().subscribe((data:any)=>{this.flightinfo=data;console.table(this.flightinfo)});
  }
  flight:any;
 
   doclick()
   {
     debugger;

      this.flightservice.flightsearch(this. SearchFlight).subscribe((data:any)=>{this.flight=data;console.table(this.flight)});
      console.log(this.flight)
     
  }

 
}