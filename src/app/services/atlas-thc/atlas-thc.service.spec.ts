import { TestBed } from '@angular/core/testing';

import { AtlasThcService } from './atlas-thc.service';

describe('AtlasThcService', () => {
  let service: AtlasThcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AtlasThcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
