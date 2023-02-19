import { Component, OnInit } from '@angular/core';
import { DemoService } from 'src/app/shared/service/demo.service';

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.scss']
})
export class BikesComponent implements OnInit {
  
  message:string = "I am automat message";
  
  constructor(private demoService:DemoService){}
  
  ngOnInit(): void {
    this.demoService.demoMessages$.subscribe(message=>{
      this.message = message;
    })

  }



}
