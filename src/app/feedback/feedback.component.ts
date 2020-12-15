import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FeedbackService } from './feedback.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  feedback: any[];

  constructor(private feedbackService: FeedbackService , private router:Router) { }

  ngOnInit(): void {
    this.feedbackService.getFeedback().subscribe(data=>{
      console.log(data)
      this.feedback=data;

    }, error => console.log(error));
  }



}
