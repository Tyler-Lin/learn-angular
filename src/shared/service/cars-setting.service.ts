import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CarsSettingService {
  constructor() {}

  engine = {
    type: 'V8',
    horsepower: 500,
    displacement: 5.0,
    fuelType: 'gasoline',
    cylinders: 8,
    torque: 550,
  } as const;

  carSetting1 = {
    name: 'Car 1',
    route: '/car1',
    color: 'red',
    year: 2020,
    price: 1000000,
    description: 'This is car 1',
    carStatus: 'Need Fix',
  };

  carSetting2 = {
    name: 'Car 2',
    route: '/car2',
    color: 'blue',
    year: 2021,
    price: 2000000,
    description: 'This is car 2',
    carStatus: 'Need Fix',
  };
}
