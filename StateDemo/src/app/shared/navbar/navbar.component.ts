import { Component, Renderer2, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  @ViewChildren('myDiv') myDiv: any;
 
  media:any = window.matchMedia("(max-width: 768px)")


  constructor(private rendered2:Renderer2){
  }

  //closed navbar when it is click on one route or outside of the navbar
  ngAfterViewInit() {
    //Check if the page is  "max-width: 768px"
    if(this.media.matches){
      for(var i = 0; i < this.myDiv.length;i++){
        this.rendered2.setAttribute(this.myDiv._results[i].nativeElement, "data-bs-toggle", "collapse");
        this.rendered2.setAttribute(this.myDiv._results[i].nativeElement, "data-bs-target", "#navbarExample");
      }
    }
}

  //show dropdown button like active when the route is active
  checkIsActive():boolean{
    var patch = location.pathname;
    if(patch == "/client"){
      return true;
    }
    return false;
  }

}
