import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentapplicationsService } from '../studentapplications.service';

@Component({
  selector: 'app-studentapplications',
  templateUrl: './studentapplications.component.html',
  styleUrls: ['./studentapplications.component.css']
})
export class StudentapplicationsComponent implements OnInit {

  Studentapplication:any
  ShowDetails:any;
  constructor(private stu:StudentapplicationsService,private myRouter:Router) { }

  ngOnInit(): void {
    this.Studentapplication=this.stu.getStudent();
  }
  
  approve(aadhar:any){
    let newData:boolean = true;
    this.stu.updateStatus(aadhar,newData)
      .subscribe((data: any) => console.log(data),
        (error: any) => console.log(error));
        alert("You have approved the application.");
  }

  remove(aadhar:any){
    
    this.stu.deleteStudent(aadhar).subscribe(
      data => {
        console.log(data);
      },
      error => console.log(error));
      alert("You have rejected the application.");
  }

 

}
