import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExchangeService } from 'src/app/services/exchange.service';

import { ConversorFormComponent } from './conversor-form.component';

describe('ConversorFormComponent', () => {
  let component: ConversorFormComponent;
  let fixture: ComponentFixture<ConversorFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConversorFormComponent],
      imports: [HttpClientTestingModule, MatSnackBarModule, FormsModule],
      providers: [ExchangeService]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ConversorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
