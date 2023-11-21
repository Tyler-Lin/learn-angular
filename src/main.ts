import { bootstrapApplication } from '@angular/platform-browser';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { AppComponent } from './app/app.component';
import { appRoutes } from './app/app.route';
import {
  HTTP_INTERCEPTORS,
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { RequestInterceptor } from './shared/interceptor/request.interceptor';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),
    provideHttpClient(withInterceptorsFromDi()),
    { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true },
  ],
}).catch(err => console.error(err));
