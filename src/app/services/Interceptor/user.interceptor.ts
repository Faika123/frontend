import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UserInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem('loginToken');
    console.log('token sent in request :', token);
    const newCloneRequest = request.clone({
      setHeaders:{
        Authorization: `${token}`
        
      }
    })
    return next.handle(newCloneRequest);
  }
}
