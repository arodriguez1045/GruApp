import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTowingPage } from './add-towing.page';

describe('AddTowingPage', () => {
  let component: AddTowingPage;
  let fixture: ComponentFixture<AddTowingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTowingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTowingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
