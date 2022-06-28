import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ExchangeService } from './exchange.service';

describe('GetSymbolsService', () => {
  let service: ExchangeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ExchangeService],
    });
    service = TestBed.inject(ExchangeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
