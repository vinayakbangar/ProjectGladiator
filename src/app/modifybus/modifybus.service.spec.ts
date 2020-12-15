import { TestBed } from '@angular/core/testing';

import { ModifybusService } from './modifybus.service';

describe('ModifybusService', () => {
  let service: ModifybusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModifybusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
