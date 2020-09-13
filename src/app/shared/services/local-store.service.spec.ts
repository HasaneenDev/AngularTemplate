import { TestBed } from '@angular/core/testing';

import { LocalStoreService } from './local-store.service';

describe('LocalStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LocalStoreService = TestBed.get(LocalStoreService);
    expect(service).toBeTruthy();
  });
});
