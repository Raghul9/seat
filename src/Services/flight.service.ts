import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { Router } from "@angular/router";



@Injectable()
export class flightsearchService
{
    constructor(private http:HttpClient,private router: Router)
    {

    }
    //.net core prjwebapi url
    readonly uri= "http://localhost:27290/api/Flightsearch" 
    getFlight()
    {
        
        return this.http.get(this.uri);
    }
    //post
    flightsearch(flight:any)
    {
       
       
        const headers = { 'content-type':'application/json'}
        const body=JSON.stringify(flight);
        console.log(body)
        
        return this.http.post(this.uri,body,{'headers':headers})
    }


   
}

