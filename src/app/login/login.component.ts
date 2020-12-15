import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../user';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //loginForm: FormGroup;										
  submitted: boolean = false;										
  invalidLogin: boolean = false;										
  email: String;
  password: String;
  userList:Observable<any>[]=[];
  user1: any;
  userListById: Object;
										
  constructor(private formBuilder: FormBuilder, private router: Router, private loginService:LoginService ) { }										
  ngOnInit(){

  }

  loginForm=new FormGroup({  
    email: new FormControl,
    password: new FormControl
     });
										
  onSubmit(){	
    this.submitted = true;										
    if(this.loginForm.invalid){										
      return;	
    }			

       this.getLoginDetail(this.loginForm.controls.email.value,this.loginForm.controls.password.value);	
      
    }	
    
    getLoginDetail(email:String,password:String)
    {
        this.loginService.getLoginDetail(email,password).subscribe(
          data =>{
            this.userList=data;
            console.log(this.userList);
            // console.log(this.userList[0]);
            // this.user1=this.userList[0];
            // console.log(this.user1)

            if(this.userList.length!=0)
            {
              this.loginService.getUserbyId(this.email).subscribe(  
                data => {  
                    this.userListById=data             
                  },  
                  error => console.log(error));  
                this.router.navigate(['dashboard',email]);

            }
            else{
              
                alert("Invalid login credentials");
              this.router.navigate(['login'])
            }					
          }
        );
       

        
    }

    // getUserbyId(email:String)
    // {
    //   this.loginService.getUserbyId(email).subscribe(  
    //     data => {  
    //         this.userListById=data             
    //       },  
    //       error => console.log(error));  
    //     this.router.navigate(['',email]);
    // }
   
  }										
										
  							


