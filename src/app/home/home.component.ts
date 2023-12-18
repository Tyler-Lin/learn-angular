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

  // 獲取新聞
  // getNews() {
  //   this.newsSvc.getNews().subscribe(data => {
  //     console.log(data.articles);
  //   });
  // }

  // 獲取當前日期
  getTodayDate(): Date {
    return new Date();
  }
}
