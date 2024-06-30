import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-learn-signal',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>learn-signal works!</p>`,
  styleUrl: './learn-signal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LearnSignalComponent { }
