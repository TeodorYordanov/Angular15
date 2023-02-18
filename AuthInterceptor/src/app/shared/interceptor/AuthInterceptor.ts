import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent} from "@angular/common/http";
import { Observable } from 'rxjs';
import {tap} from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable()

export class AuthInterceptor implements HttpInterceptor {

    constructor(private router: Router) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (location.pathname != "/login") {
            request = request.clone({
                setHeaders: {
                    'Authorization': `Bearer ${localStorage.getItem("token")}`,
                },
            });
        }

        return next.handle(request).pipe(tap({
            next: (next) => {
                console.log(next)
            },
            error: (error) => {
                if (error.status == 401) {
                    this.router.navigateByUrl("/login");
                }
            }

        }))

    }

}
