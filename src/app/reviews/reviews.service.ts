import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions={
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  private baseUrl='http://localhost:8080/admin/v1/';

  constructor(private http:HttpClient) { }

  getfreqRoutes(){
    console.log(this.http.get<any[]>(this.baseUrl+'freqTravRoutes'));
    return this.http.get<any[]>(this.baseUrl+'freqTravRoutes');
  }
  
  getProfitMonth(){
    console.log(this.http.get<any[]>(this.baseUrl+'profit'));
    return this.http.get<any[]>(this.baseUrl+'profit');
  }

  getPrefBus(){
    console.log(this.http.get<any[]>(this.baseUrl+'prefBus'));
    return this.http.get<any[]>(this.baseUrl+'prefBus');
  }

  getUserWithoutReserv()
  {
    console.log(this.http.get<any[]>(this.baseUrl+'userNoReserv'));
    return this.http.get<any[]>(this.baseUrl+'userNoReserv');
  }
}
