import { TestBed } from '@angular/core/testing';

import { LoginButtonService } from './login-button.service';

describe('LoginButtonService', () => {
  let service: LoginButtonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginButtonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
