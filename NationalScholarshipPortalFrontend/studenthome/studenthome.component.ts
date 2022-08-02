import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { student } from '../student';
import { StudenthomeService } from '../studenthome.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-studenthome',
  templateUrl: './studenthome.component.html',
  styleUrls: ['./studenthome.component.css']
})
export class StudenthomeComponent implements OnInit {

  constructor(private myhttp:HttpClient,private stu:StudenthomeService,private myRouter:Router) { }
  username:any;
  studentData:any;
  ngOnInit(): void 
  {
    this.username=sessionStorage.getItem("aadharNumber");
    this.stu.ShowDetails(this.username).subscribe(
      (data)=>{
        console.log(data);
        this.studentData=data;
      },
      (error)=>
      {
        console.log(error);
      }
    )
  }
  str :any
  stuData : any
  clickMessage : any
  getStatus(aadhar : string)  
  {
      // console.log(aadhar);
      this.str = this.stu.getApplicationStatus(aadhar).subscribe
        (data => {
          console.log(data);   
          this.stuData = data;   
          console.log(this.stuData);   
          this.clickMessage = this.stuData
        }
      );

      
  }



      // return this.myhttp.get("http://localhost:9001/status/"+`${aadharNumber}`);  
      // //return this.myhttp.get(this.restUrl+"/scholarApplications")

  //}

}
 

