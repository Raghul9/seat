import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { paymentService } from 'src/Services/payment.service';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  paymentForm: any ;
  displayMessage: any;
  paymentinfo: any;
  PostPaymentt: any;
 
  
  

  constructor(private formBuilder :FormBuilder,private paymentservice:paymentService) { }

  ngOnInit(): void {
    this.buildForm();
  }

  
  buildForm() {
    this.paymentForm = this.formBuilder.group({
      nameOnCard: ['', [Validators.required,Validators.minLength(1),Validators.pattern('^[A-Za-z][A-Za-z -]*$')]],
      cardNumber: ['', [Validators.required,Validators.minLength(16),Validators.min(1111111111111111),Validators.max(9999999999999999)]],
      expirationMonth: ['', [Validators.required,Validators.minLength(1),Validators.maxLength(2),Validators.min(1),Validators.max(12)]],
      expirationYear: ['', [Validators.required,Validators.minLength(4),Validators.maxLength(4),Validators.min(1111),Validators.max(9999)]],
      cardCVVNumber: ['', [Validators.required,Validators.minLength(3),Validators.maxLength(3),Validators.min(111),Validators.max(999)]]
    });
  }

 // convenience getter for easy access to form fields
 get f() { return this.paymentForm.controls; }

 /*onSubmit() {
  this.submitForm();
  }*/
  submitForm() {
  
  if (this.paymentForm.invalid) {
    this.displayMessage = "Payment Failed!";
      return;
  }
    this.displayMessage = "Payment Successful!";
  }
  
 payment:any={};
 id:any={}

 onSubmit()
  {
    this.paymentservice.payment(this.PostPaymentt).subscribe((data)=>{this.id=data,console.log(this.id)});
    console.log(this.id)
  }
 


}
