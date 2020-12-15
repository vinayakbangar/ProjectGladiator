import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IFeedback } from '../Ifeedback';
import { LoginService } from '../login/login.service';
import { User } from '../user';
import { UserFeedbackService } from './user-feedback.service';

@Component({
  selector: 'app-user-feedback',
  templateUrl: './user-feedback.component.html',
  styleUrls: ['./user-feedback.component.css']
})
export class UserFeedbackComponent implements OnInit {
  user: any;
  email: any;
  submitted=false;
  feedback: IFeedback=new IFeedback();

  constructor(private router:Router,private route:ActivatedRoute,private loginService:LoginService,private UFeedbackService:UserFeedbackService) { }

  ngOnInit(): void {
    this.user=new User();
    this.email=this.route.snapshot.queryParams['email'];
    this.loginService.getUserbyId(this.email).subscribe(data =>{  
       console.log(data) 
       this.user=data               
    },  
        error => console.log(error))
  }

  newFeedback():void{
    this.submitted=false;
    this.feedback=new IFeedback();
  }

  save(){
    this.UFeedbackService.addfeedback(this.email,this.feedback).subscribe(data =>
      console.log(data),error=>console.log(error));
      this.feedback=new IFeedback();
      console.log("Feedback added");
      alert("We received your feedback Thankyou!");
      location.reload();
  }

  onSubmit(){
    this.submitted=true;
    this.save();
  }

}
