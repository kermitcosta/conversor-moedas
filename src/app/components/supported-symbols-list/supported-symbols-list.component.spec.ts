import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExchangeService } from 'src/app/services/exchange.service';
import { SupportedSymbolsModule } from './supported-symbols.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SupportedSymbolsListComponent } from './supported-symbols-list.component';


describe(SupportedSymbolsListComponent.name, () => {
  let fixture: ComponentFixture<SupportedSymbolsListComponent>
  let component: SupportedSymbolsListComponent
  let service: ExchangeService


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, SupportedSymbolsModule, BrowserAnimationsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(SupportedSymbolsListComponent);
    component = fixture.componentInstance
    service = TestBed.inject(ExchangeService)

  });

  it('should create', () => {
    expect(component).toBeTruthy()
  });

  it(`should call #listSymbols() when component is created`, () => {
    spyOn(service, 'listSymbols').and.callThrough()
    component.ngOnInit()
    expect(service.listSymbols).toHaveBeenCalled()
  });

  it(`#symbols should have default value when component is created`, () => {
    expect(component.symbols).toEqual([]);
  });

  it(`#columnsToDisplay should have default value when component is created`, () => {
    expect(component.columnsToDisplay).toEqual(['code', 'description']);
  });
});
