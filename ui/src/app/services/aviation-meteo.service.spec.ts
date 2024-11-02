import { TestBed } from '@angular/core/testing';

import { AviationMeteoService } from './aviation-meteo.service';

describe('AviationMeteoService', () => {
  let service: AviationMeteoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AviationMeteoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
