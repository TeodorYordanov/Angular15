import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  
  listLanguage: any[] = [];
  collapsed = true;

  constructor(private translate: TranslateService) {
    translate.addLangs(['en-US', 'es-ES']);
    translate.setDefaultLang('en-US');

  }

 ngOnInit() {
    this.checksetDefaultLang();
  }


  //show dropdown button like active when the route is active
  checkIsActive(url:string):boolean{
    var patch = location.pathname;
    if(patch == `/${url}`){
      return true;
    }
    return false;
  }

  checksetDefaultLang(){
    var defaultLang = localStorage.getItem("lang");
    if(defaultLang != null && defaultLang != undefined){
      this.getImageSelected(defaultLang);
      this.getListLanguages(defaultLang);
    }
    else {
      this.getImageSelected("en-US");
      this.getListLanguages("en-US");
    }
  }

  getImageSelected(newLanguage:string) {
    this.translate.use(newLanguage);
    document.getElementById("languageSelected")?.setAttribute("src", this.getUrlImages(newLanguage));
  }

  getListLanguages(selectedLanguage:string) {
    this.listLanguage.splice(0,this.listLanguage.length);
    let allLanguages = this.translate.getLangs();

    for (var i = 0; i < allLanguages.length; i++) {
      if (allLanguages[i] != selectedLanguage) {
        this.listLanguage.push({
          url:this.getUrlImages(allLanguages[i]),
          key:allLanguages[i]
        })
      }
    }
  }

  changeLanguageSelected(newLanguage:string){
    this.getImageSelected(newLanguage);
    this.getListLanguages(newLanguage);
    localStorage.setItem("lang",newLanguage);
  }

  getUrlImages(name: string) {
    switch (name) {
      case "en-US":
        return "assets\\images\\united-states.png";
      case "es-ES":
        return "assets\\images\\spain.png";
      default: return "";
    }

  }


}
