import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { Router } from "@angular/router";



@Injectable()
export class paymentService
{
    constructor(private http:HttpClient,private router: Router)
    {

    }
readonly uri= "http://localhost:27290/api/Payments" 

PostPayment(id:any)
    {
        debugger;
        return this.http.post(this.uri,'/',id);
    }
//post
payment(payment:any)
{
    const headers = { 'content-type':'application/json'}
    const body=JSON.stringify(payment);
    console.log(body)
    
    return this.http.post(this.uri,body,{'headers':headers}

    )
}
}
