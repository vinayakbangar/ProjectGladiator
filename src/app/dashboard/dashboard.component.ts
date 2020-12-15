import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../login/login.service';
import { User } from '../user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  email:String;
  user:any;
  userListById: Object;
  constructor(private router:Router,private route:ActivatedRoute,private loginService:LoginService) { }

  ngOnInit(): void {

   this.user=new User();
   this.email=this.route.snapshot.params['email'];
    this.loginService.getUserbyId(this.email).subscribe(data =>{  
       console.log(data) 
       this.user=data               
    },  
        error => console.log(error));  
        
  }

  getUserbyId(email){
    this.loginService.getUserbyId(this.email).subscribe(  
      data => {  
          this.userListById=data             
        },  
        error => console.log(error));  
      this.router.navigate(['profile',{ queryParams: { email:this.email } }]);
  }
  
  
}
