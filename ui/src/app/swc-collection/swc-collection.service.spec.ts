import { TestBed } from '@angular/core/testing';

import { SwcCollectionService } from './swc-collection.service';

describe('SwcCollectionService', () => {
  let service: SwcCollectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SwcCollectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
