import { TestBed } from '@angular/core/testing';

import { ModifyrouteService } from './modifyroute.service';

describe('ModifyrouteService', () => {
  let service: ModifyrouteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModifyrouteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
