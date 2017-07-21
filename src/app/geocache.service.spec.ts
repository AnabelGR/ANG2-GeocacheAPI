import { TestBed, inject } from '@angular/core/testing';

import { GeocacheService } from './geocache.service';

describe('GeocacheService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeocacheService]
    });
  });

  it('should ...', inject([GeocacheService], (service: GeocacheService) => {
    expect(service).toBeTruthy();
  }));
});
