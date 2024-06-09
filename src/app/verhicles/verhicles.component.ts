import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerhiclesService } from './verhicles.service';

@Component({
  selector: 'app-verhicles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './verhicles.component.html',
  styleUrls: ['./verhicles.component.scss'],
})
export class VerhiclesComponent implements OnInit {
  verhiclesSvc = inject(VerhiclesService);
  verhiclesList$ = this.verhiclesSvc.verhiclesList$;
  ngOnInit(): void {}
}
