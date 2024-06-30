import {
  Component,
  Inject,
  InjectionToken,
  Injector,
  OnInit,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsSettingService } from 'src/shared/service/cars-setting.service';
import { BikeSettingService } from 'src/shared/service/bike-setting.service';
import { BtnStyleDirective } from 'src/shared/directive/btn-style.directive';

export const TEST_TOKEN = new InjectionToken<string>('test');

@Component({
  selector: 'app-car2',
  standalone: true,
  imports: [CommonModule, BtnStyleDirective],
  templateUrl: './car2.component.html',
  styleUrls: ['./car2.component.scss'],
  providers: [
    // { provide: 'bikeSvc', useClass: BikeSettingService },
    BikeSettingService,
    // CarsSettingService,
    {
      provide: TEST_TOKEN,
      useValue: 'test_token',
    },
  ],
})
export class Car2Component implements OnInit {
  car1Info = this.carSvc.carSetting1;
  car2Info = this.carSvc.carSetting2;
  bikeSvc = inject(BikeSettingService);
  test = inject(TEST_TOKEN);
  constructor(
    private carSvc: CarsSettingService
    // @Inject('test') private test: string
    // @Inject('bikeSvc') private bikeSvc: BikeSettingService
  ) {}

  ngOnInit(): void {
    console.log(this.bikeSvc.engine);
    console.log(this.test);
  }

  fixCar2() {
    this.carSvc.carSetting2.name = 'Car 2 changed';
    this.carSvc.carSetting2.carStatus = 'Fixed';
  }
}
