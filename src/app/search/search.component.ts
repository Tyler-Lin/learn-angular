import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
  MatNativeDateModule,
} from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { NewsService } from 'src/shared/service/news.service';
import {
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
  MomentDateAdapter,
} from '@angular/material-moment-adapter';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { NewsData } from 'src/shared/model/news.model';

const MY_DATE_FORMAT = {
  parse: {
    dateInput: 'YYYY-MM-DD',
  },
  display: {
    dateInput: 'YYYY-MM-DD',
    monthYearLabel: 'YYYY MMM',
    dateA11yLabel: 'YYYY-MM-DD',
    monthYearA11yLabel: 'YYYY MM',
  },
};

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatSelectModule,
  ],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMAT },
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    {
      provide: MAT_DATE_LOCALE,
      useValue: 'zh-TW',
    },
  ],
})
export class SearchComponent implements OnInit, OnDestroy {
  fb = inject(FormBuilder);
  newsSvc = inject(NewsService);
  form = this.fb.group({
    q: this.fb.nonNullable.control('bitcoin'),
    from: this.fb.nonNullable.control(''),
    to: this.fb.nonNullable.control(''),
    priority: this.fb.nonNullable.control(''),
  });

  priorityOptions: Record<string, string>[] = [
    { value: 'relevancy', viewValue: '與關鍵字最相關' },
    { value: 'popularity', viewValue: '熱門' },
    { value: 'publishedAt', viewValue: '發布時間最新的' },
  ];
  private newsDataSubject = new BehaviorSubject<NewsData>({
    status: 'ok',
    totalResults: 0,
  });
  $newsData = this.newsDataSubject.asObservable();
  private subscription!: Subscription;
  $test = new Observable();
  ngOnInit(): void {
    this.getNews();
  }

  // 獲取新聞
  getNews() {
    const params = this.getFormValue();
    this.subscription = this.newsSvc.getNews(params).subscribe(data => {
      this.newsDataSubject.next(data);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  /** 將datepicker拿到的資料format */
  private extractDate(isoDateTime: string) {
    // 將ISO 8601格式的日期時間轉換為JavaScript Date對象
    const date = new Date(isoDateTime);
    // 將時區調整為台灣標準時間 (TST)
    date.setHours(date.getHours() + 8);
    // 取得日期部分，並以台灣當地格式返回
    const taiwanDate = date.toISOString().slice(0, 10);
    return taiwanDate;
  }

  private getFormValue() {
    const formValue = this.form.value;
    if (formValue.from) {
      formValue.from = this.extractDate(formValue.from);
    }
    if (formValue.to) {
      formValue.to = this.extractDate(formValue.to);
    }
    return formValue;
  }
}
