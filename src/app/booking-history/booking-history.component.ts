import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../login/login.service';
import { User } from '../user';
import { BookingHistoryService } from './booking-history.service';

@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.component.html',
  styleUrls: ['./booking-history.component.css']
})
export class BookingHistoryComponent implements OnInit {
  user: any;
  email: any;
  bookingList: Observable<any>[]=[];


  constructor(private router:Router,private route:ActivatedRoute,private loginService:LoginService,private historyService:BookingHistoryService) { }

  ngOnInit(): void {
    this.user=new User();
    this.email=this.route.snapshot.queryParams['email'];
    this.loginService.getUserbyId(this.email).subscribe(data =>{  
       console.log(data) 
       this.user=data               
    },  
        error => console.log(error));
        this.getBookingList();
  }

  getBookingList(){
    this.historyService.getBookingList(this.email).subscribe(data =>{
      this.bookingList=data;
      console.log(this.bookingList);
    })
  }

}
