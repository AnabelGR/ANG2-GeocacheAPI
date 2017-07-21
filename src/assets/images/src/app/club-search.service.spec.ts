import { TestBed, inject } from '@angular/core/testing';

import { ClubSearchService } from './club-search.service';

describe('ClubSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClubSearchService]
    });
  });

  it('should ...', inject([ClubSearchService], (service: ClubSearchService) => {
    expect(service).toBeTruthy();
  }));
});
