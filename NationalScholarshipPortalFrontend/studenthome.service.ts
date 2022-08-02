import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudenthomeService {
  constructor(private myhttp:HttpClient) { }
  restURL:string="http://localhost:9001/status/"
  ShowDetails(aadharNumber:String)
  {
    return this.myhttp.get(`${this.restURL}studenthome/`+`${aadharNumber}`);
  }
  getApplicationStatus(aadharNumber : String) : Observable<any>
  {
    console.log("generating"+ aadharNumber);
    
    return this.myhttp.get(`${this.restURL}`+`${aadharNumber}`,{responseType: 'text'});
  
  }
}