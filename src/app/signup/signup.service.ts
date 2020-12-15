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
export class SignupService {

  private baseUrl='http://localhost:8080/user/v1/';

  constructor(private http:HttpClient) { }

  addUser(value:Object): Observable<Object>{
    console.log(this.http.post(`${this.baseUrl}`+'addUser',value));
    return this.http.post(`${this.baseUrl}`+'addUser',value);
}
}
