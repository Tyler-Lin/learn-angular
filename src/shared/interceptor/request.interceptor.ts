import { Injectable, inject } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { LoadingService } from '../service/loading.service';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  loadingSvc = inject(LoadingService);
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    this.loadingSvc.show();
    const apiToken = 'b17f91abf1ff493b9510fe2b5d8713b6';
    return next
      .handle(
        request.clone({
          setHeaders: {
            Authorization: `Bearer ${apiToken}`,
          },
        }),
      )
      .pipe(finalize(() => this.loadingSvc.hide()));
  }
}
