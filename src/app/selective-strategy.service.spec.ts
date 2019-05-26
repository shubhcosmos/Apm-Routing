/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SelectiveStrategy} from './selective-strategy.service';

describe('Service: SelectiveStrategy.service.ts', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SelectiveStrategy]
    });
  });

  it('should ...', inject([SelectiveStrategy], (service: SelectiveStrategy) => {
    expect(service).toBeTruthy();
  }));
});
