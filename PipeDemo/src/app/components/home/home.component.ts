import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  test1:any="Test";
  test2:any = "Test";
  test3:any = "Test test";
  test4:any = "3";
  test5:any = 2.345;
  test6:any = 2.3;
  test7:any = {test1:"string1",test2:"string2"};
  test8:any = 0.1234;
  test9:any = 0.1234;
  test10:any = 333;
  test11:any = 333;
  test12:any = 333;
  test13:any = "This is a simple text";
  test14:any = Date.now();
  test15:any = Date.now();
  test16:any = "This is a test";

}
