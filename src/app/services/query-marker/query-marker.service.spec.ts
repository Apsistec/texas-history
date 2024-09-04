import { TestBed } from '@angular/core/testing';

import { QueryMarkerService } from './query-marker.service';

describe('QueryMarkerService', () => {
  let service: QueryMarkerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QueryMarkerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
