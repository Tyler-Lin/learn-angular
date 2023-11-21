import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent {
  http = inject(HttpClient);
  getNews() {
    this.http
      .get('https://newsapi.org/v2/everything?q=bitcoin')
      .subscribe(res => {
        console.log(res);
      });
  }
}
