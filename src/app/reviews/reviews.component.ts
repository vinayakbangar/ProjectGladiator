import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ReviewsService } from './reviews.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  freqList:Observable<any>[]=[];
  profitList: Observable<any>[]=[];
  prefBusList:Observable<any>[]=[];
  noReservList:Observable<any>[]=[];

  constructor(private reviewService:ReviewsService , private router:Router) { }

  ngOnInit(): void {
    this.freqRoute();
    this.profitMon();
    this.getPrefBus();
    this.getUserWithoutReserv();
  }

  freqRoute(){
    this.reviewService.getfreqRoutes().subscribe(data =>{
      this.freqList=data;
      console.log(this.freqList);
    })
  }

  profitMon(){
    this.reviewService.getProfitMonth().subscribe(data =>{
      this.profitList=data;
      console.log(this.profitList);
    })
  }

  getPrefBus(){
    this.reviewService.getPrefBus().subscribe(data =>{
      this.prefBusList=data;
      console.log(this.prefBusList);
    })
  }

  getUserWithoutReserv(){
    this.reviewService.getUserWithoutReserv().subscribe(data =>{
      this.noReservList=data;
      console.log(this.noReservList);
    })
  }



}
