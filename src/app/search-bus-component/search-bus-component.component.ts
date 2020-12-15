import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Ticket } from '../ticket';
import { UserService } from './user.service';

@Component({
  selector: 'app-search-bus-component',
  templateUrl: './search-bus-component.component.html',
  styleUrls: ['./search-bus-component.component.css']
})
export class SearchBusComponentComponent implements OnInit {
  searchBus: FormGroup;//step #3 -> give same FormGroup name as in the template
 
  sourceList:Observable<any>[] = [];
  destList:Observable<any>[] = [];
busList:Observable<any>[] = [];
ticket:any;
source:String;
destination:String;
dateofJourney:String;
JourneyType:String;
email:String;
ttid:String;
showSeatList:any[]=[];
  total=0;
  count:number=0;
  fillupSeat=[];
alert=false;
confirmseats:any[]=[];
countf:number;
bookedSeats:any[]=[];
  tid: any;

  constructor(private formBuilder:FormBuilder, private userService:UserService, private router: Router) { 
    this.searchBus = formBuilder.group({ //Building the form using FormBuilder
      'source': new FormControl(), 
      'destination': new FormControl(),
      'dateofJourney': new FormControl(),
      'JourneyType': new FormControl(),
      'email': new FormControl()
  });


  }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
        this.userService.getSourceList().subscribe(data => {
          this.sourceList= data;
          console.log(this.sourceList); 
        });

        this.userService.getDestList().subscribe(data => {
          this.destList= data;
          console.log(this.destList); 
        });
      }

getBusList(){
  this.source= this.searchBus.value.source;
  this.destination=this.searchBus.value.destination;
  this.dateofJourney=this.searchBus.value.dateofJourney;
 console.log(this.dateofJourney);
    this.userService.getBusList(this.source,this.destination,this.dateofJourney).subscribe(data=>{
        this.busList=data;
        console.log(this.busList);
        });
      }
  
  Seat(e) {
    let seats=[];
   
    seats= this.showSeatList.map(iteam=>{
      return iteam.seatNo
    })
    let id = document.getElementById(e);

    
    if((this.fillupSeat.indexOf(String(e))<0) && (seats.indexOf(e)<0)){
      if((this.showSeatList.length!=4)) {
        id.innerHTML = `   <img src="../assets/img/fseat.png" alt="">`
        this.showSeatList.push(e);
      } 
   }

   this.count = this.count+1;
   console.log(JSON.stringify(this.showSeatList));
}

getbookSeat(){
    
  this.userService.getBookedSeats(this.ttid).subscribe(data=>{
    this.bookedSeats=data;
    console.log(this.bookedSeats);
    for(let i in this.bookedSeats){
      console.log(this.bookedSeats[i]);
       this.changeSeatColor(this.bookedSeats[i])
     }
    });  
}




confirmJourney():void{

this.countf=this.showSeatList.length;
console.log(this.countf);
  this.confirmseats=this.showSeatList;
this.email=this.searchBus.value.email;
this.JourneyType=this.searchBus.value.JourneyType;
this.ticket=new Ticket();
  this.userService.bookTicket(this.ttid,this.countf,this.email,this.confirmseats,this.JourneyType).subscribe(data=>{
    
    this.ticket=data;

    console.log(this.ticket);
    console.log(this.ticket.ticketId);
    this.tid=this.ticket.ticketId
    });
    setTimeout(() => {  this.router.navigate(['ticket',this.tid]); }, 4000);
   // this.router.navigate(['ticket',this.tid]);

}

getTTID(id){

this.ttid=id;
console.log(this.ttid);
}

changeSeatColor(seatNo){
  let id= document.getElementById(seatNo)
  id.innerHTML=`  <img src="../assets/img/bookseat.png">`
  id.removeEventListener("click",this.Seat);
  

}



}
