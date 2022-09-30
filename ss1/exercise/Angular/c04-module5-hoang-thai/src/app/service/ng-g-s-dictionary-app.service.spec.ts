import { TestBed } from '@angular/core/testing';

import { NgGSDictionaryAppService } from './ng-g-s-dictionary-app.service';

describe('NgGSDictionaryAppService', () => {
  let service: NgGSDictionaryAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgGSDictionaryAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
