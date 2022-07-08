import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppModule } from './../../../app.module';
import { ConversorFormComponent } from './conversor-form.component';
import { ConversorModule } from './../conversor.module';
import { ExchangeService } from 'src/app/services/exchange.service';

describe('ConversorFormComponent', () => {
  let component: ConversorFormComponent;
  let fixture: ComponentFixture<ConversorFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConversorFormComponent],
      imports: [ConversorModule, HttpClientTestingModule, AppModule],
      providers: [ExchangeService]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ConversorFormComponent);
    component = fixture.componentInstance;

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
