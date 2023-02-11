import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  collapsed = true;
  isAdmin:boolean = true;


  constructor(){
  }

  ngOnInit(): void {
    if(localStorage.getItem("rol") == "Admin"){
      this.isAdmin = true;
    }
    else{
      this.isAdmin = false;
    }
  }

  //show dropdown button like active when the route is active
  checkIsActive(url:string):boolean{
    var patch = location.pathname;
    if(patch.indexOf(url) != -1){
      return true;
    }
    return false;
  }

}
