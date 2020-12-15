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
export class ResetPassService {

  constructor(private http:HttpClient) {}
    
  private baseUrl = 'http://localhost:8080/user/v1/';
  
  sendMail(email:String){
    console.log(this.http.get<any[]>(this.baseUrl+'sendResetMail/'+email));
    return this.http.get<any[]>(this.baseUrl+'sendResetMail/'+email);
  
  }
}
