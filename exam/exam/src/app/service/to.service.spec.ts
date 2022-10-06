import { TestBed } from '@angular/core/testing';

import { ToService } from './to.service';

describe('ToService', () => {
  let service: ToService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
