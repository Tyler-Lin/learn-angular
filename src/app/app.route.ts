import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('./home/home.component').then((m) => m.HomeComponent),
      },
      {
        path: 'search',
        loadComponent: () =>
          import('./search/search.component').then((m) => m.SearchComponent),
      },
      {
        path: 'change-detection',
        loadComponent: () =>
          import('./change-detection/change-detection.component').then(
            (m) => m.ChangeDetectionComponent
          ),
      },
      {
        path: 'car1',
        loadComponent: () =>
          import('./car1/car1.component').then((m) => m.Car1Component),
      },
      {
        path: 'car2',
        loadComponent: () =>
          import('./car2/car2.component').then((m) => m.Car2Component),
      },
      {
        path: 'stop-watch',
        loadComponent: () =>
          import('./stop-watch/stop-watch.component').then(
            (m) => m.StopWatchComponent
          ),
      },
      {
        path: 'stop-watch-signals',
        loadComponent: () =>
          import('./stop-watch-signals/stop-watch-signals.component').then(
            (m) => m.StopWatchSignalsComponent
          ),
      },
      {
        path: 'verhicles',
        loadComponent: () =>
          import('./verhicles/verhicles.component').then(
            (m) => m.VerhiclesComponent
          ),
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
