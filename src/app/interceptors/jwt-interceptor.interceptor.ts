import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem('token');
    console.log(token);
/*     if (token) {
      request.clone({
        setHeaders: {
          Authorization: `${token}`
        }
      });
    } */
    if (token) {
      request = request.clone({ headers: request.headers.set('x-access-token', token) });
    }
    //console.log(request.headers.get('Authorization'));
    console.log(request.headers.get('x-access-token'));

    console.log("OK");
    console.log(request);
    return next.handle(request);
  }
}
