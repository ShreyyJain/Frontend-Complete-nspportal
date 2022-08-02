import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Institution } from '../institution';
import { InstitutionregistrationService } from '../institutionregistration.service';
import { student } from '../student';
import { StudentregistrationService } from '../studentregistration.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-studentregistration',
  templateUrl: './studentregistration.component.html',
  styleUrls: ['./studentregistration.component.css']
})
export class StudentregistrationComponent implements OnInit {

  constructor(private stu:StudentregistrationService, myHttp:HttpClient , private router:Router)  { }



  ngOnInit(): void {

  }
  form=new FormGroup({
    'stateofDomicile':new FormControl('',Validators.required),
    'district':new FormControl('',Validators.required),
    'name':new FormControl('',Validators.required),
    'dateOfBirth':new FormControl('',Validators.required),
    'gender':new FormControl('',Validators.required),
    'mobileNumber':new FormControl('', [Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    'email':new FormControl('',Validators.compose([Validators.email, Validators.required])),
    'institutecode':new FormControl('',Validators.required),
    'aadharNumber':new FormControl('',Validators.required),
    'bankifsccode':new FormControl('',Validators.required),
    'accountnumber':new FormControl('',Validators.required),
    'bankname':new FormControl('',Validators.required),
    'password':new FormControl('',Validators.required),
  });
  student:student=new student();
  saveStudent()
  {
      this.student=this.form.value;
      console.log(this.form.value)
      console.log(this.student)

      this.stu.registerStudent(this.student).subscribe(
        (data)=>{
          console.log(data);
          this.router.navigate(['/home']);
                  },
        (error)=>
        {
          console.log(error)
        }
      )
  }

  OnClickFunction(){
   alert("Registration done");
 }
  
 get mobilenumberinput(){return this.form.get('mobileNumber')}
 get emailinput(){return this.form.get('email')};
 get passwordinput(){return this.form.get('password')};
 get institutecodeinput(){return this.form.get('institutecode')};
 get nameinput(){return this.form.get('name')};
 get aadharnumberinput(){return this.form.get('aadharNumber')};

}