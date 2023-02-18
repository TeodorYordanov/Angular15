
import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { finalize, tap } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable()
export class DemoInterceptor implements HttpInterceptor {

    count = 0;   
    constructor(private spinner: NgxSpinnerService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.spinner.show()
        this.count++;
        return next.handle(req)
            .pipe(
                tap({
                    next: (next) => {
                        console.log(next)
                    },
                    error: (error)=>{
                        console.log(error)
                    },
                    finalize:() =>{
                        this.count--;
                      if ( this.count == 0 ) this.spinner.hide ()
                    }
                  })
            );
    }

  }
  