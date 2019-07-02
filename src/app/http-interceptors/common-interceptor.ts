

import { AuthService } from '../services/auth.service';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
 
@Injectable()
export class CommonInterceptor implements HttpInterceptor {
    private authService: AuthService;
  constructor(private injector: Injector) {}
 
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    this.authService = this.injector.get(AuthService);
    const authToken = this.authService.getAuthorizationToken();

    console.log('authToken===>',authToken)
 
    const authReq = req.clone({
         headers: req.headers.set('Authorization', 'Bearer '+authToken)
    });
 
    // send cloned request with header to the next handler.
    return next.handle(authReq);
  }
}