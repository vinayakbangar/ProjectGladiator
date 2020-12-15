import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  constructor(private http:HttpClient) {}
    
  private baseUrl = 'http://localhost:8080/user/v1/';


  getTicketbyId(tid:number){
    console.log(this.http.get<any[]>(this.baseUrl + 'getTicket/'+tid));
    return this.http.get<any[]>(this.baseUrl + 'getTicket/'+tid);
 
  }

}
