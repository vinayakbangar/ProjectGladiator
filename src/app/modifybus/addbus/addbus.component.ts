import { Component, OnInit } from '@angular/core';
import { Bus } from 'src/app/Bus';
import { ModifybusService } from '../modifybus.service';

@Component({
  selector: 'app-addbus',
  templateUrl: './addbus.component.html',
  styleUrls: ['./addbus.component.css']
})
export class AddbusComponent implements OnInit {

  constructor(private modifyBusService: ModifybusService) { }

  id:number;
  bus:Bus=new Bus();
  submitted=false;
  ngOnInit(): void {
  }

  newRoute():void{
    this.submitted=false;
    this.bus=new Bus();
  }

  save(){
    this.modifyBusService.addBus(this.id,this.bus).subscribe(data =>
      console.log(data),error=>console.log(error));
      this.bus=new Bus();
      console.log("route added"+ this.bus);
  }

  onSubmit(){
    this.submitted=true;
    this.save();
  }

}
