import { TestBed, inject } from '@angular/core/testing';

import { AsyncDataService } from './async-data.service';

describe('AsyncDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AsyncDataService]
    });
  });

  it('should ...', inject([AsyncDataService], (service: AsyncDataService) => {
    expect(service).toBeTruthy();
  }));
});
