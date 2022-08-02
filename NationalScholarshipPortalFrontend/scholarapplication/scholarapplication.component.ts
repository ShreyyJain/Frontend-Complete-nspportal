import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScholarshipapplicationService } from '../scholarshipapplication.service';
import { applicationDetails } from '../scholarshipapplicationdetails';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-scholarapplication',
  templateUrl: './scholarapplication.component.html',
  styleUrls: ['./scholarapplication.component.css']
})
export class ScholarapplicationComponent implements OnInit {
  optionValue:any;
  schemeValue:any;
  constructor(private myrouter:Router,private bas:ScholarshipapplicationService) { }

  ngOnInit(): void {
  }


form=new FormGroup({
  'aadhar':new FormControl('',Validators.required),
  'phoneNumber':new FormControl('',Validators.required),
  'name':new FormControl('',Validators.required),
  'dob':new FormControl('',Validators.required),
  'email':new FormControl('',Validators.compose([Validators.email, Validators.required])),
  'religion':new FormControl('',Validators.required),
  'community':new FormControl('',Validators.required),
  'fatherName':new FormControl('',Validators.required),
  'motherName':new FormControl('',Validators.required),
  'annualIncome':new FormControl('',Validators.required),
  'institution':new FormControl('',Validators.required),
  'presentClass':new FormControl('',Validators.required),
  'presentClassYear':new FormControl('',Validators.required),
  'modeOfStudy':new FormControl('',Validators.required),
  'classStartDate':new FormControl('',Validators.required),
  'university':new FormControl('',Validators.required),
  'previousClass':new FormControl('',Validators.required),
  'previousClassYear':new FormControl('',Validators.required),
  'previousPercentage':new FormControl('',Validators.required),
  'tenthRollNo':new FormControl('',Validators.required),
  'tenthBoard':new FormControl('',Validators.required),
  'tenthYear':new FormControl('',Validators.required),
  'tenthPercentage':new FormControl('',Validators.required),
  'twelthRollNo':new FormControl('',Validators.required),
  'twelthBoard':new FormControl('',Validators.required),
  'twelthYear':new FormControl('',Validators.required),
  'twelthPercentage':new FormControl('',Validators.required),
  'admissionFee':new FormControl('',Validators.required),
  'tuitionFee':new FormControl('',Validators.required),
  'otherFee':new FormControl('',Validators.required),
  'isDisabled':new FormControl('',Validators.required),
  'typeofDisability':new FormControl('',Validators.required),
  'disabilityPercenage':new FormControl('',Validators.required),
  'maritalStatus':new FormControl('',Validators.required),
  'parentsProfession':new FormControl('',Validators.required),
  'state':new FormControl('',Validators.required),
  'district':new FormControl('',Validators.required),
  'taluk':new FormControl('',Validators.required),
  'houseNo':new FormControl('',Validators.required),
  'streetNo':new FormControl('',Validators.required),
  'pincode':new FormControl('',Validators.required),
  'gender':new FormControl('',Validators.required),
  'scheme':new FormControl('',Validators.required),
  'finalStatus':new FormControl('',Validators.required)
});


applicationDetails:applicationDetails = new applicationDetails();

   savescholarshipDetails(basicDetailsForm:any){

    this.applicationDetails=basicDetailsForm.value;
    console.log(basicDetailsForm.value);
    console.log(this.applicationDetails);
    this.bas.addStudent(this.applicationDetails).subscribe(
      (data)=>{
        console.log(data);
        console.log("Persisted");
        alert("Registration done")
      },
      (error)=>{
         console.log(error)
      }
      )
   }
   OnClickFunction(){
 alert("Registration successful!");
}

}

// student:student=new student();
// saveStudent()
// {
//     this.student=this.form.value;
//     console.log(this.form.value)
//     console.log(this.student)

//     this.stu.registerStudent(this.student).subscribe(
//       (data)=>{
//         console.log(data);
//         this.router.navigate(['/home']);
//                 },
//       (error)=>
//       {
//         console.log(error)
//       }
//     )
// }

// OnClickFunction(){
//  alert("Registration done");
// }