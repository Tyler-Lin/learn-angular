import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsService } from 'src/shared/service/news.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  newsSvc = inject(NewsService);
  onGetNews() {
    this.newsSvc.getNews().subscribe(data => {
      console.log(data.articles[0]);
    });
  }
}
