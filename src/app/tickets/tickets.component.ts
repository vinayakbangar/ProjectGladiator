import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ticket } from '../ticket';
import { TicketsService } from './tickets.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {
  ticket:any;
  tid: any;
  myDate=new Date();
 

  constructor(private route:ActivatedRoute,private ticketService: TicketsService , private router:Router) {
    this.myDate = new Date();
   }

  ngOnInit(): void {

    this.ticket=new Ticket();
     this.tid=this.route.snapshot.params['tid'];

     this.ticketService.getTicketbyId(this.tid).subscribe(data=>{
      console.log(data)
      this.ticket=data;

    }, error => console.log(error));

 
  }

  printPage() {
    window.print();
  }
 
}
