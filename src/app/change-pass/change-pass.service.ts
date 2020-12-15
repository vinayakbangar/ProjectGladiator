import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class ChangePassService {

  constructor(private http:HttpClient) {}
    
  private baseUrl = 'http://localhost:8080/user/v1/';

  getUser(email:String):Observable<any[]>{
    console.log(this.http.get<any[]>(this.baseUrl+'userId/'+email));
  
    return this.http.get<any[]>(this.baseUrl+'userId/'+email);
  }
  
   
  updatePwd(user:User):Observable<any>{
    console.log(this.http.put(`${this.baseUrl}/updatePwd`, user));
    return this.http.put(`${this.baseUrl}/updatePwd`, user);
  }
}
