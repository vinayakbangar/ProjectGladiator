import { Component, OnInit } from '@angular/core';
import { Ticket } from '../ticket';
import { TicketsService } from '../tickets/tickets.service';
import { CancelTicketService } from './cancel-ticket.service';

@Component({
  selector: 'app-cancel-ticket',
  templateUrl: './cancel-ticket.component.html',
  styleUrls: ['./cancel-ticket.component.css']
})
export class CancelTicketComponent implements OnInit {
  ticket: any;
  tid: number;
  flag: any;

  constructor(private ticketService: TicketsService ,private cancelticketService: CancelTicketService) { }

  ngOnInit(): void {
  }

  getTicket(tid:number){
    this.ticket=new Ticket();
    this.ticketService.getTicketbyId(this.tid).subscribe(data=>{
     console.log(data)
     this.ticket=data;

   }, error => console.log(error));

  }

  deleteTicket(tid:number){
    this.cancelticketService.deleteTicket(this.tid)
      .subscribe( data => {
        this.flag = data;
        alert("Ticket Cancelled and Amount has been refunded into your Wallet in Profile Section");
        location.reload();
      });
  }

}
