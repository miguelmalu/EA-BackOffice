import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Toast, ToastrComponentlessModule, ToastrService } from 'ngx-toastr';

@Injectable()
export class JwtInterceptorInterceptor implements HttpInterceptor {

  constructor(private toastr: ToastrService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem('token');
    //console.log(token);
/*     if (token) {
      request.clone({
        setHeaders: {
          Authorization: `${token}`
        }
      });
    } */

    if (token && this.isTokenExpired()) {
      console.log("Token is expired");
      this.toastr.error('Token is expired', 'Token expired');
      localStorage.removeItem('token');
      /* this.showSessionExpiredPopUp(); */
    } else {
        console.log("Token is not expired");
        if (token) {
          request = request.clone({ headers: request.headers.set('x-access-token', token) });
        }
        //console.log(request.headers.get('Authorization'));
        //console.log(request.headers.get('x-access-token'));
    
        console.log("OK");
        console.log(request);
    }
    return next.handle(request);
  }

  isTokenExpired() {
    const helper = new JwtHelperService();
    const token = localStorage.getItem('token');
    if (helper.isTokenExpired(token!)) {
        return true;
    }
    return false;
  }

/*   showSessionExpiredPopUp() {
    Swal.fire({
        html: 'Your session expired!',
    }).then((result) => {
        this.token.signout();
        window.location.href = '';
    });
  } */

}
