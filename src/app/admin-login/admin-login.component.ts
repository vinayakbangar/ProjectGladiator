import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminLoginService } from './admin-login.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  submitted: boolean = false;										
  invalidLogin: boolean = false;										
  email: String;
  password: String;
  adminList:Observable<any>[]=[];
  admin1: any;
 // userListById: Object;
  constructor(private formBuilder: FormBuilder, private router: Router, private loginService: AdminLoginService ) { }

  ngOnInit(): void {
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
              this.adminList=data;
              console.log(this.adminList);
              // console.log(this.userList[0]);
              // this.user1=this.userList[0];
              // console.log(this.user1)
  
              if(this.adminList.length!=0)
              {
                  this.router.navigate(['admindashboard']);
  
              }
              else{
                
                  alert("Invalid login credentials");
                this.router.navigate(['adminlogin'])
              }					
            }
          );
         
  
          
      }

}
