import { TestBed, inject } from '@angular/core/testing';

import { DataVisualizationService } from './data-visualization.service';

describe('DataVisualizationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataVisualizationService]
    });
  });

  it('should be created', inject([DataVisualizationService], (service: DataVisualizationService) => {
    expect(service).toBeTruthy();
  }));
});
