import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { GetSymbolsService } from './get-symbols.service';

describe('GetSymbolsService', () => {
  let service: GetSymbolsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GetSymbolsService],
    });
    service = TestBed.inject(GetSymbolsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
