import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) {}
    
    private baseUrl = 'http://localhost:8080/user/v1/';


    getSourceList(){
      console.log(this.http.get<any[]>(this.baseUrl + 'sourceList'));
      return this.http.get<any[]>(this.baseUrl + 'sourceList');
   
    }


    getDestList(){
      console.log(this.http.get<any[]>(this.baseUrl + 'destList'));
      return this.http.get<any[]>(this.baseUrl + 'destList');
   
    }


    getBusList(source:String,destination:String,dateofJourney:String):Observable<any>{
      console.log(this.http.get<any[]>(this.baseUrl +'searchBus/'+source+'/'+destination+'/'+dateofJourney ));
      return this.http.get<any[]>(this.baseUrl +'searchBus/'+source+'/'+destination+'/'+dateofJourney );
    }

    bookTicket(ttid:String,count:number,email:String,confirmseats:any[],JourneyType:String){
      console.log(this.http.get<any[]>(this.baseUrl+'bookTicket/'+ttid+'/'+count+'/'+email+'/'+confirmseats+'/'+JourneyType));
      return this.http.get<any[]>(this.baseUrl+'bookTicket/'+ttid+'/'+count+'/'+email+'/'+confirmseats+'/'+JourneyType);
    }

    getBookedSeats(ttId:String){

      console.log(this.http.get<any[]>(this.baseUrl+'getSeatNumbers/'+ttId));
      return this.http.get<any[]>(this.baseUrl+'getSeatNumbers/'+ttId);

    }
}
