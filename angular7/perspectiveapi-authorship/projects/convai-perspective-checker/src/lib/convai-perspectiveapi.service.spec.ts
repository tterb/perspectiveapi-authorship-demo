import { TestBed } from '@angular/core/testing';

import { ConvaiPerspectiveApiService } from './convai-perspectiveapi.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ConvaiPerspectiveApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: ConvaiPerspectiveApiService = TestBed.get(ConvaiPerspectiveApiService);
    expect(service).toBeTruthy();
  });
});
