import { Component, OnInit } from '@angular/core';
import { Ticket } from '../ticket';
import { TicketsService } from '../tickets/tickets.service';

@Component({
  selector: 'app-check-status',
  templateUrl: './check-status.component.html',
  styleUrls: ['./check-status.component.css']
})
export class CheckStatusComponent implements OnInit {
  ticket:any;
  tid:any;

  constructor(private ticketService: TicketsService ) { }

  ngOnInit(): void {
  }


  getTicket(tid:number){
   this.ticket=new Ticket();
    this.ticketService.getTicketbyId(this.tid).subscribe(data=>{
     console.log(data)
     this.ticket=data;

   }, error => console.log(error));

  }

}
