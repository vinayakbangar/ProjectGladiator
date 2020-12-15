import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user';
import { SignupService } from './signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  submitted: boolean;
  user: User=new User();
  id: number;
  password: any;
  confirmpassword: any;
  email: String;
  

  constructor(private signUpService:SignupService,private router:Router ) {
   }

  signUpForm=new FormGroup({  
    email: new FormControl,
    password: new FormControl,
    confirmpassword:new FormControl,
    contactNumber:new FormControl,
    dateOfBirth:new FormControl,
    firstName:new FormControl,
    lastName:new FormControl,
    gender:new FormControl
    
     });
  ngOnInit(): void {
  }


  newUser():void{
    this.submitted=false;
    this.user=new User();
  }

  save(){

    if(this.signUpForm.controls.password.value==this.signUpForm.controls.confirmpassword.value)
    { 
      this.user.email=this.signUpForm.controls.email.value;
      this.user.password=this.signUpForm.controls.password.value;
      this.user.contactNumber=this.signUpForm.controls.contactNumber.value;
      this.user.dateOfBirth=this.signUpForm.controls.dateOfBirth.value;
      this.user.firstName=this.signUpForm.controls.firstName.value;
      this.user.lastName=this.signUpForm.controls.lastName.value;
      this.user.gender=this.signUpForm.controls.gender.value;
      this.user.registered='Y';
      this.user.wallet=1000;

      this.signUpService.addUser(this.user).subscribe(data =>
        console.log(data),error=>console.log(error));
        this.user=new User();
        console.log("New User added"+ this.user);
        this.router.navigate(['login'])
    }

    else{
      alert("check confirm password");
      this.router.navigate(['signup'])
    }
    
  }

  onSubmit(){
    this.submitted=true;
    this.save();
    if(this.signUpForm.invalid){										
      return;	
    }
  }

}
