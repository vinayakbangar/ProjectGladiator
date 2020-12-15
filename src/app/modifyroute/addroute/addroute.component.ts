import { Component, OnInit } from '@angular/core';
import { IRoute } from 'src/app/IRoute';
import { ModifyrouteService } from '../modifyroute.service';

@Component({
  selector: 'app-addroute',
  templateUrl: './addroute.component.html',
  styleUrls: ['./addroute.component.css']
})
export class AddrouteComponent implements OnInit {

  route:IRoute=new IRoute();
  submitted=false;
  constructor(private modifyRouteService: ModifyrouteService) { }

  ngOnInit(): void {
  }

  newRoute():void{
    this.submitted=false;
    this.route=new IRoute();
  }

  save(){
    this.modifyRouteService.addRoute(this.route).subscribe(data =>
      console.log(data),error=>console.log(error));
      this.route=new IRoute();
      console.log("route added"+ this.route);
  }

  onSubmit(){
    this.submitted=true;
    this.save();
  }

}
