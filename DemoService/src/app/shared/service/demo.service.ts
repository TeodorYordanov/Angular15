import { Subject } from "rxjs";

export class DemoService {

    private _demoMessagesSource = new Subject<string>();
    demoMessages$ = this._demoMessagesSource.asObservable();
  
    constructor(){
  
    }
  
    sendMessages(message:string){
      this._demoMessagesSource.next(message);
    }
  }