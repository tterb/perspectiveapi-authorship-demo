import { TestBed } from '@angular/core/testing';

import { ConvaiPerspectiveCheckerService } from './convai-perspective-checker.service';

describe('ConvaiPerspectiveCheckerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConvaiPerspectiveCheckerService = TestBed.get(ConvaiPerspectiveCheckerService);
    expect(service).toBeTruthy();
  });
});
