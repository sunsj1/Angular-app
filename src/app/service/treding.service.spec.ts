import { TestBed } from '@angular/core/testing';

import { TredingService } from './treding.service';

describe('TredingService', () => {
  let service: TredingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TredingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
