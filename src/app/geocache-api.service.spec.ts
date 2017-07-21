import { TestBed, inject } from '@angular/core/testing';

import { GeocacheApiService } from './geocache-api.service';

describe('GeocacheApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeocacheApiService]
    });
  });

  it('should ...', inject([GeocacheApiService], (service: GeocacheApiService) => {
    expect(service).toBeTruthy();
  }));
});
