import { TestBed, inject } from '@angular/core/testing';

import { VisualforceService } from './visualforce.service';

describe('VisualforceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VisualforceService]
    });
  });

  it('should be created', inject([VisualforceService], (service: VisualforceService) => {
    expect(service).toBeTruthy();
  }));
});
