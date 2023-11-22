import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, delay, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private _loading$ = new BehaviorSubject<boolean>(false);
  loading$: Observable<boolean> = this._loading$.pipe(
    switchMap(isLoading => {
      if (!isLoading) {
        return of(false);
      }
      return of(true).pipe(delay(300));
    }),
  );

  constructor() {}

  show() {
    this._loading$.next(true);
  }

  hide() {
    this._loading$.next(false);
  }
}
