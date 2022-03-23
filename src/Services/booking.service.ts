import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";


@Injectable()
export class BookingService{
    
    constructor(private http:HttpClient)
    {
        
    }

   readonly uri="http://localhost:27290/api/Booking";

    togetdata()
    {
        debugger;
        return this.http.get(this.uri);
        
        
    }

    getbookingdetails()
    {
        debugger;
        return this.http.get(this.uri);
    }
    insertbookingdetails(booking:any)
    {
        debugger;
        return this.http.post(this.uri,booking,{responseType :'text'});
    }   
}
