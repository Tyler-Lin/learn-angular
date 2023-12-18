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
          import('./home/home.component').then(m => m.HomeComponent),
      },
      {
        path: 'search',
        loadComponent: () =>
          import('./search/search.component').then(m => m.SearchComponent),
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
