import { TestBed } from '@angular/core/testing';

import { AddUserTokenInterceptor } from './add-user-token.interceptor';

describe('AddUserTokenInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AddUserTokenInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: AddUserTokenInterceptor = TestBed.inject(AddUserTokenInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
