import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgForm, FormsModule } from '@angular/forms';

import { AppModule } from './../../../app.module';
import { ConversorFormComponent } from './conversor-form.component';
import { ConversorModule } from './../conversor.module';
import { ExchangeService } from 'src/app/services/exchange.service';

describe(`${ConversorFormComponent.name}`, () => {
  let component: ConversorFormComponent
  let fixture: ComponentFixture<ConversorFormComponent>
  let service: ExchangeService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConversorFormComponent],
      imports: [ConversorModule, HttpClientTestingModule, AppModule, FormsModule],
      providers: [ExchangeService]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ConversorFormComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(ExchangeService)
  });

  it('should create', () => {
    expect(component).toBeTruthy()
  });

  it(`#symbols should have default value when component is created`, () => {
    expect(component.symbols).toEqual([])
  });

  it(`#showDiv should have default value when component is created`, () => {
    expect(component.showDiv).toEqual(false)
  });

  it(`#conversions should have default value when component is created`, () => {
    expect(component.conversions).toEqual([])
  });

  it(`should call #listSymbols() when component is created`, () => {
    spyOn(service, 'listSymbols').and.callThrough()
    component.ngOnInit()
    expect(service.listSymbols).toHaveBeenCalled()
  });

  it(`#${ConversorFormComponent.prototype.clearConversion.name}() should reset form when called`, () => {
    fixture.detectChanges()
    const form: NgForm = fixture.nativeElement.querySelector('form')
    spyOn(form, 'reset').and.callThrough()
    component.clearConversion(form)
    expect(form.reset).toHaveBeenCalled()
  });

  it(`#${ConversorFormComponent.prototype.clearConversion.name}() should set #showDiv to false when called`, () => {
    fixture.detectChanges()
    const form: NgForm = fixture.nativeElement.querySelector('form')
    component.showDiv = true
    component.clearConversion(form)
    expect(component.showDiv).toBe(false)
  });

  it(`Input #value should be invalid when value is <= 0.01`, async () => {
    fixture.detectChanges()
    await fixture.whenStable().then(() => {
      const valueInput: HTMLInputElement = fixture.nativeElement.querySelector('#valueInput')
      const invalidValues = [0, -2, -1, -77, -821763]
      invalidValues.forEach((valor) => {
        valueInput.valueAsNumber = valor
        valueInput.dispatchEvent(new Event('input'))
        fixture.detectChanges()
        expect(valueInput.classList)
          .withContext(`Valor válido: ${valor}`)
          .toContain('ng-invalid')
      })
    })
  });

});
