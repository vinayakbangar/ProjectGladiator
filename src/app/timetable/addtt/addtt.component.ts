import { Component, OnInit } from '@angular/core';
import { TimetableService } from '../timetable.service';

@Component({
  selector: 'app-addtt',
  templateUrl: './addtt.component.html',
  styleUrls: ['./addtt.component.css']
})
export class AddttComponent implements OnInit {
  timetable: any;

  constructor(private timetableService: TimetableService) { }
  id:String;
  dt:String;
  bsid:String;
  routeId:number;
  driverId:String

  submitted=false;
  ngOnInit(): void {
  }
 

  reloadData(){
    this.timetableService.addTimetable(this.id,this.dt,this.bsid,this.routeId,this.driverId).subscribe(data =>{
      this.timetable=data;
      console.log(this.timetable);
    })

}



  onSubmit(){
    this.reloadData();
    this.submitted=true;
  }


}
