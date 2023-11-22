import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsData } from '../model/news.model';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  http = inject(HttpClient);

  getNews(): Observable<NewsData> {
    return this.http.get<NewsData>(
      'https://newsapi.org/v2/everything?q=bitcoin',
    );
  }
}
