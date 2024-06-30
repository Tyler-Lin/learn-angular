import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BikeSettingService {
  constructor() {}

  engine = {
    type: 'V2',
    horsepower: 200,
    displacement: 1000,
    fuelType: 'gasoline',
    cylinders: 2,
    torque: 150,
  } as const;
}
