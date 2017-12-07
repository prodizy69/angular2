import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/http';
import { Observable } from 'rxjs/observable';
@Injectable()
export class InterceptorService implements HttpInterceptor {
  intercept (req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authReq = req.clone({
      headers: req.headers.set('Authorization', 'token <your GitHub token>')
    });
    return next.handle(authReq);
  }
}
