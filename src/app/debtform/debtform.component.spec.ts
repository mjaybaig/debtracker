/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DebtformComponent } from './debtform.component';

describe('DebtformComponent', () => {
  let component: DebtformComponent;
  let fixture: ComponentFixture<DebtformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebtformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebtformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
