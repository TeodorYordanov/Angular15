import { Component, OnInit } from '@angular/core';
import { DemoService } from 'src/app/shared/service/demo.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {
  message:string = "";


  constructor(private serviceDemo:DemoService){}

  ngOnInit(): void {
   

  }


  sendData(){
    this.serviceDemo.sendMessages(this.message)
  }
}
