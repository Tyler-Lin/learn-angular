import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NewsData, NewsParams } from '../model/news.model';
import { Params } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  http = inject(HttpClient);

  getNews(params: NewsParams): Observable<NewsData> {
    let httpParams = new HttpParams();
    Object.keys(params).forEach((key) => {
      if (params[key] !== undefined && params[key] !== '') {
        httpParams = httpParams.set(key, params[key] as string);
      }
    });
    return this.http.get<NewsData>('https://newsapi.org/v2/everything', {
      params: httpParams,
    });
    // return of('test')
  }

  getTopHeadlinesByBusinness(p: Params): Observable<any> {
    const url = 'https://newsapi.org/v2/top-headlines';
    let params = new HttpParams();
    Object.keys(p).forEach((key) => {
      let value = p[key];
      if (value !== null) {
        params = params.set(key, value);
      }
    });
    return this.http.get(url, { params });
  }
}
