import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetServicePage } from './get-service.page';

describe('GetServicePage', () => {
  let component: GetServicePage;
  let fixture: ComponentFixture<GetServicePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetServicePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetServicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
