import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from 'src/shared/libs/counter/counter.component';
import { BtnStyleDirective } from 'src/shared/directive/btn-style.directive';

@Component({
  selector: 'app-change-detection',
  standalone: true,
  imports: [CommonModule, CounterComponent, BtnStyleDirective],
  templateUrl: './change-detection.component.html',
  styleUrls: ['./change-detection.component.scss'],
})
export class ChangeDetectionComponent implements OnInit, AfterViewInit {
  // 如果是透過結構型指令 ngIf 動態加入的元件，則無法透過 ViewChild 取得該元件實體，初始化時會是 undefined ， 這時候可以透過 ngAfterViewInit 週期方法取得。
  // 如果是初始化就存在的dom結構則可加上 {static: true}，這樣就可以在 ngOnInit 時就取得該元件實體。
  // 預設都是 {static: false}，這樣就必須在 ngAfterViewInit 時才能取得該元件實體。
  @ViewChild(CounterComponent, { static: true })
  counterComponent?: CounterComponent;
  @ViewChild('content', { static: true }) content?: ElementRef;
  data = { num: 1 };

  ngOnInit(): void {
    console.log('CounterComponent!!', this.counterComponent);
    console.log('content!!', this.content);
  }

  ngAfterViewInit(): void {
    console.log('CounterComponent!!', this.counterComponent);
    console.log('content!!', this.content);
  }

  plus() {
    ++this.data.num;
    // this.data = {num: ++this.data.num};
  }
}
