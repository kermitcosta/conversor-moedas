import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConversorModule } from './conversor.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversorPageComponent } from './conversor-page.component';

describe('ConversorPageComponent', () => {
  let component: ConversorPageComponent;
  let fixture: ComponentFixture<ConversorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConversorPageComponent],
      imports: [ConversorModule, BrowserAnimationsModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ConversorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
