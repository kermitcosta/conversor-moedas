import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportedSymbolsListComponent } from './supported-symbols-list.component';

describe('SupportedSymbolsListComponent', () => {
  let component: SupportedSymbolsListComponent;
  let fixture: ComponentFixture<SupportedSymbolsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupportedSymbolsListComponent ]
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
