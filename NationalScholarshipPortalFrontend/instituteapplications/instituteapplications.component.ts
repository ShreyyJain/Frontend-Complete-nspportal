import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InstituteapplicationService } from '../instituteapplication.service';

@Component({
  selector: 'app-instituteapplications',
  templateUrl: './instituteapplications.component.html',
  styleUrls: ['./instituteapplications.component.css']
})
export class InstituteapplicationsComponent implements OnInit {

  instituteapplication:any
  
  constructor(private inst:InstituteapplicationService,private myRouter:Router) { }

   approve(instiCode:any){
    let newData:boolean = true;
    console.log(newData);
    this.inst.updateStatus(instiCode,newData)
      .subscribe((data: any) => console.log(data),
        (error: any) => console.log(error));
        
  }

  reject(instiCode:any){
  this.inst.rejectInstitute(instiCode).subscribe(
    (data: any) => {
      console.log(data);
    },
    (error: any) => console.log(error));

  }
   ngOnInit() : void {
    this.instituteapplication=this.inst.getapplicationList()
  }
  
  }