import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversorHistoryComponent } from './conversor-history.component';

describe('ConversorHistoryComponent', () => {
  let component: ConversorHistoryComponent;
  let fixture: ComponentFixture<ConversorHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConversorHistoryComponent],
      imports: [MatSnackBarModule, MatDialogModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ConversorHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
