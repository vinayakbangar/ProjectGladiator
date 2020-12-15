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
export class BookingHistoryService {

  private baseUrl='http://localhost:8080/user/v1/';

  constructor(private http:HttpClient) { }

  getBookingList(id:String){
    console.log(this.http.get<Ticket[]>(this.baseUrl+'bookHistory/'+id));
    return this.http.get<any[]>(this.baseUrl+'bookHistory/'+id);
  }
}
