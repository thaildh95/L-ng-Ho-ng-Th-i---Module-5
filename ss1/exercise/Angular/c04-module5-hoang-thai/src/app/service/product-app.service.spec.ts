import { TestBed } from '@angular/core/testing';

import { ProductAppService } from './product-app.service';

describe('ProductAppService', () => {
  let service: ProductAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
