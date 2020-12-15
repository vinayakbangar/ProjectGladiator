import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Route } from 'src/app/routes';
import { ModifyrouteService } from '../modifyroute.service';

@Component({
  selector: 'app-updateroute',
  templateUrl: './updateroute.component.html',
  styleUrls: ['./updateroute.component.css']
})
export class UpdaterouteComponent implements OnInit {

  id:number;
  routes: any;
 
  constructor(private route:ActivatedRoute,private modifyRouteService: ModifyrouteService, private router:Router) { }

  ngOnInit(): void {

    this.routes=new Route();
     this.id=this.route.snapshot.queryParams['id'];

     this.modifyRouteService.findRouteById(this.id).subscribe(data=>{
       console.log(data)
       this.routes=data;

     }, error => console.log(error));
   
    
  }
  updateRoute(){
    this.modifyRouteService.updateRoute(this.id,this.routes).subscribe(data=>{
      console.log(data)
      this.routes=new Route();
      this.router.navigate(['admindashboard/displayroutes']);
    } , error => console.log(error));
  }

  onSubmit()
  {
    this.updateRoute();
  }

}
