import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ChangePassService } from './change-pass.service';

@Component({
  selector: 'app-change-pass',
  templateUrl: './change-pass.component.html',
  styleUrls: ['./change-pass.component.css']
})
export class ChangePassComponent implements OnInit {

  resetPage:FormGroup;
  email:any;
  user1:any;
  flag:any;
  constructor(private formBuilder:FormBuilder, private changePassService:ChangePassService, private router: Router) {
    this.resetPage = formBuilder.group({ //Building the form using FormBuilder
      
      'Email': new FormControl(),
      'newPass': new FormControl(),
      'confirmPass': new FormControl()
  });
   }

  ngOnInit(): void {
  }

  changePwd(){
    this.email= this.resetPage.value.Email;

    this.changePassService.getUser(this.email).subscribe(data=>{
      this.user1=data;
      console.log(this.user1);
      });
    

      setTimeout(() => {   
      if(this.user1.email == this.email){
        this.user1.password=this.resetPage.value.newPass;

        this.changePassService.updatePwd(this.user1).subscribe(data=>{
          this.flag=data;
          console.log(this.flag);
          });
        alert("Password Changed");
        location.reload();

      }}, 3000);
    
    
    }

}
