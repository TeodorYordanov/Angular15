import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  API_URL:string="https://gorest.co.in/public/v2/users";
  data:any[] = [];
  
  constructor(private httpClient: HttpClient){}
  
  ngOnInit(): void {
    this.getData();
  }


  getData(): void {
    this.httpClient.get<any>(this.API_URL).subscribe({
      next: (v) => {this.data=v},
      error: (e) => {console.log("error")},
      complete: () => console.log("complete") 
  })
  }

}
