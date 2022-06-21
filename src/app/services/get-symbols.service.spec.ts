import { TestBed } from '@angular/core/testing';

import { GetSymbolsService } from './get-symbols.service';

describe('GetSymbolsService', () => {
  let service: GetSymbolsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetSymbolsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
