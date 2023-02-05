import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  promise:Promise<string>;
  data:string;

  constructor(private spinner: NgxSpinnerService){

  }

  


  ngOnInit(): void {
    var error = false;
    this.promise = new Promise<string>((resolve,reject)=>{
      setTimeout(() => {
        if (error) {
          reject('error'); // pass values
        } else {
          resolve('done'); // pass values
        }
      }, 2000);
    });
    this.spinner.show();
    this.promise
    .then((element)=>{
      this.data = element;
    })
    .catch((element)=>{
      this.data = element;
    })
    .finally(()=>{
      this.spinner.hide();
    })
  }


 
}
