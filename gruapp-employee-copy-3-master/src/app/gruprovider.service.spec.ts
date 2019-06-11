import { TestBed } from '@angular/core/testing';

import { GruproviderService } from './gruprovider.service';

describe('GruproviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GruproviderService = TestBed.get(GruproviderService);
    expect(service).toBeTruthy();
  });
});
