import { Component, OnInit, computed, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnStyleDirective } from 'src/shared/directive/btn-style.directive';
import {
  BehaviorSubject,
  Subject,
  defer,
  filter,
  map,
  merge,
  repeat,
  sample,
  scan,
  startWith,
  switchMap,
  takeUntil,
  timer,
} from 'rxjs';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';

interface IVehicle {
  id: number;
  name: string;
  price: number;
}

@Component({
  selector: 'app-stop-watch-signals',
  standalone: true,
  imports: [CommonModule, BtnStyleDirective],
  templateUrl: './stop-watch-signals.component.html',
  styleUrls: ['./stop-watch-signals.component.scss'],
})
export class StopWatchSignalsComponent implements OnInit {
  start$ = new Subject();
  pause$ = new Subject();
  stop$ = new Subject();
  divide$ = new Subject();

  restartSeconds$ = new BehaviorSubject(0);
  pauseOrStop$ = merge(this.stop$, this.pause$);

  timerSeconds$ = timer(0, 10).pipe(map((v) => v / 100));
  counter$ = defer(() => this.restartSeconds$).pipe(
    switchMap((restartSeconds) =>
      this.timerSeconds$.pipe(map((seconds) => seconds + restartSeconds))
    )
  );

  timerShow$ = this.start$.pipe(
    switchMap(() => this.counter$),
    takeUntil(this.pauseOrStop$),
    repeat(),
    startWith(0)
  );

  timer = toSignal(this.timerShow$);

  divideSeconds$ = this.timerShow$.pipe(sample(this.divide$));

  totalList$ = this.divideSeconds$.pipe(
    scan((a: number[], c) => [...a, c], [])
  );

  /** 偶數的recordList */
  evenList$ = this.divideSeconds$.pipe(
    filter((_, idx) => (idx + 1) % 2 === 0),
    scan((a: number[], c) => [...a, c], [])
  );

  /** 奇數的recordList */
  oddList$ = this.divideSeconds$.pipe(
    filter((_, idx) => (idx + 1) % 2 === 1),
    scan((a: number[], c) => [...a, c], [])
  );

  ngOnInit(): void {
    this.timerShow$
      .pipe(sample(this.pause$))
      .subscribe((res) => this.restartSeconds$.next(res));

    this.stop$.pipe(map(() => 0)).subscribe(this.restartSeconds$);
  }

  start() {
    this.start$.next(null);
  }

  pause() {
    this.pause$.next(null);
  }

  stop() {
    this.stop$.next(null);
  }

  setRecord() {
    this.divide$.next(null);
  }

  // count = signal(1);
  // countPlusOne = computed(() => this.count() * 5);

  // countEff = effect(() =>
  //   console.log('Latest count:', this.count(), this.countPlusOne())
  // );

  // vehicles = signal<IVehicle[]>([]);

  // constructor() {}

  // ngOnInit(): void {
  //   this.count.update((v) => v * 2);
  //   console.log('start');
  // }

  // addNumber() {
  //   this.count.set(this.count() + 1);
  // }
}
