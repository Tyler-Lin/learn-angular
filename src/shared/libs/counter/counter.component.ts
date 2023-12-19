import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DoCheck,
  Input,
  OnInit,
  SimpleChanges,
  inject,
} from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  template: `<p *ngIf="data">Num:{{ data.num }}</p>
    <p><ng-content></ng-content></p>`,
  styleUrls: ['./counter.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterComponent {
  changeDetectorRef = inject(ChangeDetectorRef);
  @Input() data?: { num: number };

  ngDoCheck(): void {
    this.changeDetectorRef.markForCheck();
  }
}
