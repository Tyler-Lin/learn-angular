import { bootstrapApplication } from '@angular/platform-browser';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { AppComponent } from './app/app.component';
import { appRoutes } from './app/app.route';
import {
  HTTP_INTERCEPTORS,
  HttpClientModule,
  provideHttpClient,
  withInterceptors,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { RequestInterceptor } from './shared/interceptor/request.interceptor';
import { provideAnimations } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';
import { BikeSettingService } from './shared/service/bike-setting.service';
import { provideNgWebConsole } from 'ng-web-console';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),

    // 如果是使用 HttpInterceptorFn的方式，使用以下方式注入。
    // provideHttpClient(
    //   withInterceptors([authInterceptor, errorHandlerInterceptor])
    // ),

    BikeSettingService,
    provideHttpClient(withInterceptorsFromDi()), // 這種跟下面的方式一樣
    // importProvidersFrom(HttpClientModule), // 兩種都可以
    { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true },
    provideAnimations(),
    provideNgWebConsole(),
  ],
}).catch((err) => console.error(err));
