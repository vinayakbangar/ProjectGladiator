import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Timetable } from 'src/app/timetable';
import { TimetableService } from '../timetable.service';

@Component({
  selector: 'app-updatett',
  templateUrl: './updatett.component.html',
  styleUrls: ['./updatett.component.css']
})
export class UpdatettComponent implements OnInit {
  id: any;
  timetable: any;
  dt: String;
  bsid: String;
  routeId: number;
  driverId: String;
  tt: any[];

  constructor(private route:ActivatedRoute,private modifyttService: TimetableService, private router:Router) { }

  ngOnInit(): void {

    this.id=this.route.snapshot.queryParams['id'];
    this.timetable=new Timetable();

    this.modifyttService.findTimeTable(this.id).subscribe(data=>{
      console.log(data)
      this.timetable=data;
      this.id=this.timetable.timetableId;
      this.dt=this.timetable.departureDateTime;
      this.bsid=this.timetable.bus.busNo;
      this.driverId=this.timetable.driver.driverId;
      this.routeId=this.timetable.route.routeId;


    }, error => console.log(error));
  }

  updatett(){
    this.modifyttService.updateTimetable(this.id,this.dt,this.bsid,this.routeId,this.driverId).subscribe(data=>{
      console.log(data)
      this.tt=data;
      this.router.navigate(['admindashboard/displaytt']);
    } , error => console.log(error));
  }

  onSubmit()
  {
    this.updatett();
  }

}
