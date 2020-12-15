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
export class TimetableService {

  private baseUrl='http://localhost:8080/admin/v1/';

  constructor(private http:HttpClient) { }

  getTimeTable(){
    console.log(this.http.get<any[]>(this.baseUrl+'timetable'));
    return this.http.get<any[]>(this.baseUrl+'timetable');
  }

  addTimetable(id:String,dt:String,bsid:String,routeId:number,driverId:String): Observable<Object>
  {
    console.log(this.http.get<any[]>(`${this.baseUrl}`+'addTimetable/'+id+'/'+dt+'/'+bsid+'/'+routeId+'/'+driverId));
    return this.http.get<any[]>(`${this.baseUrl}`+'addTimetable/'+id+'/'+dt+'/'+bsid+'/'+routeId+'/'+driverId);
  }

  updateTimetable(id:String,dt:String,bsid:String,routeId:number,driverId:String)
  {
    console.log(this.http.get<any[]>(`${this.baseUrl}`+'updateTimetable/'+id+'/'+dt+'/'+bsid+'/'+routeId+'/'+driverId));
    return this.http.get<any[]>(`${this.baseUrl}`+'updateTimetable/'+id+'/'+dt+'/'+bsid+'/'+routeId+'/'+driverId);
  }

  findTimeTable(id:String): Observable<Object>
  {
    return this.http.get(`${this.baseUrl}/findTimeTable/${id}`); 
  }
}
