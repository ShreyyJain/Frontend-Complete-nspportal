import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { Institution } from '../institution';


@Component({
  selector: 'app-institutionlogin',
  templateUrl: './institutionlogin.component.html',
  styleUrls: ['./institutionlogin.component.css']
})
export class InstitutionloginComponent implements OnInit {
  emailid = ''
  password = ''
 

  constructor(private router:Router,private loginService:AuthenticationService) { }

  ngOnInit(): void {}
  
  
  form=new FormGroup({
    'emailid':new FormControl('',[Validators.required,Validators.email]),
    'password':new FormControl('',Validators.required)
  })
  institution:Institution=new Institution();
  checkLogin()
  {
    this.institution=this.form.value;
      console.log(this.form.value)
      console.log(this.institution)
    let institution={
      "emailid":this.emailid,
      "password":this.password
    }

    this.loginService.institutelogin(institution).subscribe((response) => {
      console.log(response);
      if(response)
      {
        sessionStorage.setItem('emailid', this.emailid)
      
        this.router.navigate(['/institutionhome']);
      }
      else{
        alert("Invalid email id or password");
      }
    });
 
;
      
  }

  
  get emailinput(){return this.form.get('emailid')}
  get passwordinput(){return this.form.get('password')}
}