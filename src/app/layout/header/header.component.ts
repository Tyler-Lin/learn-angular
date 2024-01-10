import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, MatButtonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  menuList = [
    {
      name: 'Home',
      route: '/home',
    },
    {
      name: 'Search',
      route: '/search',
    },
    {
      name: 'Change Detection',
      route: '/change-detection',
    },
    {
      name: 'Car 1',
      route: '/car1',
    },
    {
      name: 'Car 2',
      route: '/car2',
    },
  ];
}
