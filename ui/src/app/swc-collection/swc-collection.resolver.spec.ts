import { TestBed } from '@angular/core/testing';

import { SwcCollectionResolver } from './swc-collection.resolver';

describe('SwcCollectionResolver', () => {
  let resolver: SwcCollectionResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(SwcCollectionResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
