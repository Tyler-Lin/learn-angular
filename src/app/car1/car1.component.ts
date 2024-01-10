import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsSettingService } from 'src/shared/service/cars-setting.service';
import { BtnStyleDirective } from 'src/shared/directive/btn-style.directive';

@Component({
  selector: 'app-car1',
  standalone: true,
  imports: [CommonModule, BtnStyleDirective],
  templateUrl: './car1.component.html',
  styleUrls: ['./car1.component.scss'],
})
export class Car1Component {
  carSvc = inject(CarsSettingService);
  carInfo = this.carSvc.carSetting1;
  fixCar1() {
    this.carSvc.carSetting1.name = 'Car 1 changed';
    this.carSvc.carSetting1.carStatus = 'Fixed';
  }
}
