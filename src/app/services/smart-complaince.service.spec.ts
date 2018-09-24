import { TestBed, inject } from '@angular/core/testing';

import { SmartComplainceService } from './smart-complaince.service';

describe('SmartComplainceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SmartComplainceService]
    });
  });

  it('should be created', inject([SmartComplainceService], (service: SmartComplainceService) => {
    expect(service).toBeTruthy();
  }));
});
