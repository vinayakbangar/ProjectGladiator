import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../login/login.service';
import { User } from '../user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  email:String
  user:any
  constructor(private router:Router,private route:ActivatedRoute,private loginService:LoginService) { }

  ngOnInit(): void {
    this.user=new User();
    this.email=this.route.snapshot.queryParams['email'];
    this.loginService.getUserbyId(this.email).subscribe(data =>{  
       console.log(data) 
       this.user=data               
    },  
        error => console.log(error));  
  }

  updateUser(){
    this.loginService.updateUser(this.email,this.user).subscribe(data=>{
      console.log(data)
      this.user=new User();
      location.reload();
    } , error => console.log(error));
  }

}
