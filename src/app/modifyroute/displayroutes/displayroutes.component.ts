import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { Route } from 'src/app/routes';
import { ModifyrouteService } from '../modifyroute.service';

@Component({
  selector: 'app-displayroutes',
  templateUrl: './displayroutes.component.html',
  styleUrls: ['./displayroutes.component.css']
})
export class DisplayroutesComponent implements OnInit {

  routeList:Observable<any>[]=[];
  r:number;
  updated=false;
  routeListById: any;
  route: Route=new Route();
  routes: Observable<Route>[];
  isDisabledContent: boolean;
  id: number;
 // id:number
 // dtTrigger: Subject<any>= new Subject(); 
  

  constructor(private modifyRouteService: ModifyrouteService, private router:Router) { }

  ngOnInit(): void{
    this.reloadData();  
  }

  reloadData(){
    this.modifyRouteService.getRouteDetails().subscribe(data =>{
      this.routeList=data;
      console.log(this.routeList);
    })
  }
  updateRouteById(id){ 
    //this.router.navigate(['/updateroutes/:id']);
    this.modifyRouteService.findRouteById(id).subscribe(  
      data => {  
          this.routeListById=data             
        },  
        error => console.log(error));  
      this.router.navigate(['updateroutes',{ queryParams: { id:this.id} }]);
  } 

}
