/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FeeslistComponent } from './feeslist.component';

describe('FeeslistComponent', () => {
  let component: FeeslistComponent;
  let fixture: ComponentFixture<FeeslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeeslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeeslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
