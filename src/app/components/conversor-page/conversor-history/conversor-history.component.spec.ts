import { AppModule } from './../../../app.module';
import { ConversorModule } from './../conversor.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConversorHistoryComponent } from './conversor-history.component';


const conversionMock = [{
  "from": "BRL",
  "to": "USD",
  "value": 5,
  "date": new Date(),
  "result": 0.95148,
  "rate": 0.190296,
  "dollarLimit": false
}]

describe('ConversorHistoryComponent', () => {
  let component: ConversorHistoryComponent
  let fixture: ComponentFixture<ConversorHistoryComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConversorHistoryComponent],
      imports: [ConversorModule, AppModule]
    })
      .compileComponents()

    fixture = TestBed.createComponent(ConversorHistoryComponent)
    component = fixture.componentInstance
    sessionStorage.setItem('conversions', JSON.stringify(conversionMock))

  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it(`#columnsToDisplay should have default value when component is created`, () => {
    expect(component.columnsToDisplay).toEqual([
      `date`,
      `hour`,
      `value`,
      `from`,
      `result`,
      `to`,
      `rate`,
      `action`
    ])
  })

  it(`(D) ${ConversorHistoryComponent.prototype.openDialog.name}() should be called when trash can icon is clicked`, async () => {
    fixture.detectChanges()

    await fixture.whenStable().then(() => {
      component.ngOnInit()
      const deleteIcon: HTMLElement = fixture.nativeElement.querySelector('.delete-button')
      spyOn(component, 'openDialog').and.callThrough()
      deleteIcon.click()
      fixture.detectChanges()
      expect(component.openDialog).toHaveBeenCalled()
    })

  })

})
