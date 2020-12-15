import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bus } from '../Bus';

const httpOptions={
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class ModifybusService {

  private baseUrl='http://localhost:8080/admin/v1/';

  constructor(private http:HttpClient) { }

  getBusList(){
    console.log(this.http.get<Bus[]>(this.baseUrl+'busesList'));
    return this.http.get<any[]>(this.baseUrl+'busesList');
  }

  addBus(id:number,value:Object): Observable<Object>{
    console.log(this.http.post(`${this.baseUrl}`+'addBus/'+id,value));
    return this.http.post(`${this.baseUrl}`+'addBus/'+id,value);

  }

  
}
