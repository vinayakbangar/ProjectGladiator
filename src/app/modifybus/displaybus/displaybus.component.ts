import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ModifybusService } from '../modifybus.service';

@Component({
  selector: 'app-displaybus',
  templateUrl: './displaybus.component.html',
  styleUrls: ['./displaybus.component.css']
})
export class DisplaybusComponent implements OnInit {
  busList: Observable<any>[]=[];

  
  constructor(private modifyBusService: ModifybusService, private router:Router) { }

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData(){
    this.modifyBusService.getBusList().subscribe(data =>{
      this.busList=data;
      console.log(this.busList);
    })
  

}
}
