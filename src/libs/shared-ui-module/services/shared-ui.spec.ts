import { TestBed, inject } from '@angular/core/testing';

import { DataVisualizationSharedUiService } from './shared-ui.service';

describe('DataVisualizationSharedUiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataVisualizationSharedUiService]
    });
  });

  it('should be created', inject([DataVisualizationSharedUiService], (service: DataVisualizationSharedUiService) => {
    expect(service).toBeTruthy();
  }));
});
