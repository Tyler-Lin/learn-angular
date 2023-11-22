import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoadingService } from 'src/shared/service/loading.service';
import { AsyncPipe, CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterModule, MatProgressSpinnerModule, NgIf, AsyncPipe],
})
export class AppComponent {
  loadingSvc = inject(LoadingService);
  title = 'learn-angular';
  loading$ = this.loadingSvc.loading$;
}
