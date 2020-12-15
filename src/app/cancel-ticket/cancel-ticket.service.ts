import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ticket } from '../ticket';
const httpOptions={
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class CancelTicketService {

  private baseUrl='http://localhost:8080/user/v1/';

  constructor(private http:HttpClient) { }

  public deleteTicket(tid:number) {
    return this.http.delete<any>(`${this.baseUrl}` + "deleteTicket/"+tid);
  }
}
