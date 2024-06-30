import {
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsService } from 'src/shared/service/news.service';
import { CustomStructuralDirective } from 'src/shared/directive/custom-structural.directive';
import { HoverTooltipDirective } from 'src/shared/directive/hover-tooltip.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CustomStructuralDirective, HoverTooltipDirective],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  private viewContainerRef = inject(ViewContainerRef);
  private newsSvc = inject(NewsService);

  @ViewChild('container', { static: true }) container!: ViewContainerRef;

  ngOnInit(): void {
    // console.log(this.viewContainerRef);
  }
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
