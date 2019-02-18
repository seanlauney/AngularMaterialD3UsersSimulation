import { TestBed } from '@angular/core/testing';

import { RandomUsersService } from './random-users.service';

describe('RandomUsersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RandomUsersService = TestBed.get(RandomUsersService);
    expect(service).toBeTruthy();
  });
});
