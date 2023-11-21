import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    const apiToken = 'b17f91abf1ff493b9510fe2b5d8713b6';
    return next.handle(
      request.clone({
        setHeaders: {
          Authorization: `Bearer ${apiToken}`,
        },
      }),
    );
  }
}
