import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Route } from '../routes';


const httpOptions={
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class ModifyrouteService {

  private baseUrl='http://localhost:8080/admin/v1/';

  constructor(private http:HttpClient) { }

  getRouteDetails(){
    console.log(this.http.get<Route[]>(this.baseUrl+'routesList'));
    return this.http.get<any[]>(this.baseUrl+'routesList');
  }

  addRoute(route: Object): Observable<Object>{
    console.log(this.http.post(`${this.baseUrl}`+'addRoute',route));
    return this.http.post(`${this.baseUrl}`+'addRoute',route);

  }

  findRouteById(id:number):Observable<Object> {  
    return this.http.get(`${this.baseUrl}/findRoute/${id}`); 
  }
  

  updateRoute(id:number,value:object):Observable<any>{
    return this.http.put(`${this.baseUrl}/updateRoute/${id}`, value);
  }


}
