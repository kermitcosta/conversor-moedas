import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SupportedSymbolsListComponent } from './supported-symbols-list.component';
import { ExchangeService } from 'src/app/services/exchange.service';

describe('SupportedSymbolsListComponent', () => {
  let component: SupportedSymbolsListComponent;
  let fixture: ComponentFixture<SupportedSymbolsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SupportedSymbolsListComponent],
      imports: [HttpClientTestingModule],
      providers: [ExchangeService]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SupportedSymbolsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
