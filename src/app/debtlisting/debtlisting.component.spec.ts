/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DebtlistingComponent } from './debtlisting.component';

describe('DebtlistingComponent', () => {
  let component: DebtlistingComponent;
  let fixture: ComponentFixture<DebtlistingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebtlistingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebtlistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
