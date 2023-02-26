import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  data:string = "";

  ngOnInit(): void {
    let dataState = window.history.state;
    if(dataState.showCar){
      this.data = dataState.showCar;
    }


    
  }
  

}
