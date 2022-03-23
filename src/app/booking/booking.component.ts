import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookingService } from 'src/Services/booking.service';
import { NgForm } from '@angular/forms';
import { NgComponentOutlet } from '@angular/common';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
 
  bookingForm: any;

  constructor(private fb : FormBuilder,private booking:BookingService, private router:Router) { }
  TicketBookingtable:any;
  ngOnInit(): void {
    this.getTicket();
  
  }

  Bookingform=this.fb.group(
    {
      
      'bookingid': new FormControl('',[Validators.required]),
      'bookingdatetime': new FormControl('',[Validators.required]),
      'totalpassengers': new FormControl('',[Validators.required]),
      'amount': new FormControl('',[Validators.required]),
      'bookingstatus': new FormControl('',[Validators.required]),
      'flightno': new FormControl('',[Validators.required]),
    }
  );
 
  get bookingid()
  {
    return this.Bookingform.get('noOftickets');
  }
  get bookingdatetime()
  {
    return this.Bookingform.get('bookingdatetime');
  }
  get totalpassengers()
  {
    return this.Bookingform.get('totalpassengers');
  }
  get amount()
  {
    return this.Bookingform.get('amount');
  }
  get bookingstatus()
  {
    return this.Bookingform.get('bookingstatus');
  }
  get flightno()
  {
    return this.Bookingform.get('flightno');{ }
  }

  recordinfo:any;
  getTicket()
  {

  this.booking.getbookingdetails().subscribe((data:any)=>{this.recordinfo=data; console.table(this.recordinfo)});
  }
  result:any;
setRecord()
{
  debugger;
  console.log(this.Bookingform.value);
  

  this.booking.insertbookingdetails(this.Bookingform.value).subscribe((data:any)=>{this.result=data,console.log(this. result)});
  
}


  /*ngOnInit(): void {
    this.bookingForm
  }
  onSubmit() {
    this.submitForm();
    }
  submitForm() {
    throw new Error('Method not implemented.');
  }
  buildForm() {
    this.bookingForm = this.formBuilder.group({
      bookingid: ['', [Validators.required]],
      bookingdatetime: ['', [Validators.required]],
      totalpassengers: ['', [Validators.required]],
      amount: ['', [Validators.required]],
      bookingstatus: ['', [Validators.required]],
      flightno: ['', [Validators.required]],
    
    
    })
    }
    get f() { return this.bookingForm.controls; }
    */
}
