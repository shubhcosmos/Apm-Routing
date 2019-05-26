import { TestBed, async, inject } from '@angular/core/testing';

import { ProductEditCandeactivateGuardGuard } from './product-edit-candeactivate-guard.guard';

describe('ProductEditCandeactivateGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductEditCandeactivateGuardGuard]
    });
  });

  it('should ...', inject([ProductEditCandeactivateGuardGuard], (guard: ProductEditCandeactivateGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
