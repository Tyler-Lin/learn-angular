import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { VerhiclesData } from './verhicles.model';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VerhiclesService {
  private url = 'https://swapi.py4e.com/api/vehicles';
  http = inject(HttpClient);

  verhiclesList$ = this.http
    .get<VerhiclesData>(this.url)
    .pipe(map((res) => res.results));

  // getVerhicles() {
  //   return this.http.get<VerhiclesData>(this.url);
  // }

  getSchema() {
    return this.http.get('https://swapi.py4e.com/api/vehicles/schema');
  }
}
