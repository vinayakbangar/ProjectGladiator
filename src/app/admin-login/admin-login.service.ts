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
export class AdminLoginService {

  private baseUrl='http://localhost:8080/admin/v1/';

  constructor(private http:HttpClient) { }

  getLoginDetail(email:String,password:String):Observable<any>{
    console.log(this.http.get<any[]>(this.baseUrl+'adminLogin/'+email+'/'+password));
    return this.http.get<any[]>(this.baseUrl+'adminLogin/'+email+'/'+password);
  }
}
