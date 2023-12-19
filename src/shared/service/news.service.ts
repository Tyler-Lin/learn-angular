import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NewsData, NewsParams } from '../model/news.model';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  http = inject(HttpClient);

  getNews(params: NewsParams): Observable<NewsData> {
    let httpParams = new HttpParams();
    Object.keys(params).forEach(key => {
      if (params[key] !== undefined && params[key] !== '') {
        httpParams = httpParams.set(key, params[key] as string);
      }
    });
    return this.http.get<NewsData>('https://newsapi.org/v2/everything', {
      params: httpParams,
    });
    // return of('test')
  }
}
