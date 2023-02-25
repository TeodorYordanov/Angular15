import { Component, OnInit } from '@angular/core';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { TranslateService } from '@ngx-translate/core';

marker('Header.PagePayment');
marker('Header.Test');
marker('Header.Test2');

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  showTextFromTS:string="";

  constructor(private translateService:TranslateService){

  }
  ngOnInit(): void {
    this.translateService.onLangChange.subscribe((event)=>{
      this.translateService.getStreamOnTranslationChange("HOME.TITLE").subscribe((element)=>{
        this.showTextFromTS = element;
      });
    });
  }

}
