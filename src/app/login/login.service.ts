import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user';

const httpOptions={
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl='http://localhost:8080/user/v1/';

  constructor(private http:HttpClient) { }

  getLoginDetail(email:String,password:String):Observable<any>{
    console.log(this.http.get<User[]>(this.baseUrl+'userLogin/'+email+'/'+password));
    return this.http.get<any[]>(this.baseUrl+'userLogin/'+email+'/'+password);
  }

  getUserbyId(email:String){
    return this.http.get(`${this.baseUrl}/userId/${email}`);
  }

  updateUser(email:String,value:object):Observable<any>{
    return this.http.put(`${this.baseUrl}/updateUser/${email}`, value);
  }


}
