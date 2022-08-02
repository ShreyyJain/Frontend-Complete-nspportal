import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentapplicationsService {
  
  restURL: string;
  constructor(private myhttp:HttpClient) {
    this.restURL="http://localhost:9001/"
  
  }
  getStudent(){
    return this.myhttp.get(this.restURL+"scholarApplications")
  }
  // getapplicationList(): Observable<any> {
  //   return this.myhttp.get(`${this.restURL}studentsinnodal`);
  // }

  updateStatus(aadhar:any, newData: any):Observable<Object>{
    
    return this.myhttp.put(`${this.restURL}studentApproval/${aadhar}`,newData);
  }

  updateFinalStatus(aadhar:any, newData: any):Observable<Object>{
    
    return this.myhttp.put(`${this.restURL}ministrystudent/${aadhar}`,newData);
  }

  deleteStudent(aadhar:any):Observable<any> {

    return this.myhttp.delete(`${this.restURL}studentApprovalDenied/${aadhar}`)
  }

  deleteMinistryStudent(aadhar:any):Observable<any> {

    return this.myhttp.delete(`${this.restURL}ministryStudentDenied/${aadhar}`)
  }
  

  getFinalApplicationList(): any {
    return this.myhttp.get(`${this.restURL}getministrystudent`)
  }

  getInstituteApplicationList(email : any) : any {
    return this.myhttp.get(`${this.restURL}studentininstitute/${email}`)
  }
}