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
export class FeedbackService {

  constructor(private http:HttpClient) {}
    
  private baseUrl = 'http://localhost:8080/admin/v1/';


  getFeedback(){
    console.log(this.http.get<any[]>(this.baseUrl + 'feedbacksList'));
    return this.http.get<any[]>(this.baseUrl + 'feedbacksList');
 
  }
}
