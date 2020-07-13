import { TestBed } from '@angular/core/testing';

import { AppTechGuard } from './app-tech.guard';

describe('AppTechGuard', () => {
  let guard: AppTechGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AppTechGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
