import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TimetableService } from '../timetable.service';

@Component({
  selector: 'app-displaytt',
  templateUrl: './displaytt.component.html',
  styleUrls: ['./displaytt.component.css']
})
export class DisplayttComponent implements OnInit {
  timetable: Observable<any>[]=[];
  id:String;
  dt:String;
  bsid:String;
  routeId:number;
  driverId:String;
  timetable1: any;

  constructor(private modifyttService: TimetableService, private router:Router) { }

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData(){
    this.modifyttService.getTimeTable().subscribe(data =>{
      this.timetable=data;
      console.log(this.timetable);
    })
}

updateTimeTable(id)
{
  this.modifyttService.findTimeTable(id).subscribe(data =>{  
      this.timetable1=data             
    },  
    error => console.log(error));  
    this.router.navigate(['updatett',{ queryParams: { id:this.id} }]);

}
}

