import { TestBed } from '@angular/core/testing';

import { CaremeApiService } from './careme-api.service';

describe('CaremeApiService', () => {
  let service: CaremeApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CaremeApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
