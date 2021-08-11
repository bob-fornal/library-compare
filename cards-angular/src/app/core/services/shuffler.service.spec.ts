import { TestBed } from '@angular/core/testing';

import { ShufflerService } from './shuffler.service';

describe('ShufflerService', () => {
  let service: ShufflerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShufflerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
