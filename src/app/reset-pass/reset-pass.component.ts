import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ResetPassService } from './reset-pass.service';

@Component({
  selector: 'app-reset-pass',
  templateUrl: './reset-pass.component.html',
  styleUrls: ['./reset-pass.component.css']
})
export class ResetPassComponent implements OnInit {
  resetPwd:FormGroup;
  email:String;
  constructor(private formBuilder:FormBuilder, private resetPassService:ResetPassService, private router: Router) {
    this.resetPwd = formBuilder.group({ //Building the form using FormBuilder
      
      'Email': new FormControl()
  });

   }
  ngOnInit(): void {
  }
  sendMail(){
    this.email=this.resetPwd.value.Email;

    this.resetPassService.sendMail(this.email).subscribe();
    alert("Mail Has been Sent to: "+this.email);
        location.reload();
  }
}
