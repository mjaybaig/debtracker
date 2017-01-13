/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DebtService } from './debt.service';

describe('Service: Debt', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DebtService]
    });
  });

  it('should ...', inject([DebtService], (service: DebtService) => {
    expect(service).toBeTruthy();
  }));
});
