import { RouterTestingModule } from '@angular/router/testing';
import { HomeModule } from './home.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomePageComponent } from './home-page.component';
import { Router } from '@angular/router';


describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;
  let router: Router

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HomeModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('(D) should navigate to "/conversor" when "Converter Moedas" button is clicked', () => {
    fixture.detectChanges()
    const navigateSpy = spyOn(router, 'navigateByUrl')
    const buttonConvert: HTMLButtonElement = fixture.nativeElement.querySelector('.btn-primary')

    buttonConvert.click()
    fixture.detectChanges()

    expect((navigateSpy)).toHaveBeenCalledWith(router.createUrlTree(['/conversor']), jasmine.anything())

  });

  it('(D) should navigate to "/listar-moedas" when "Listar Símbolos" button is clicked', () => {
    fixture.detectChanges()
    const navigateSpy = spyOn(router, 'navigateByUrl')
    const buttonConvert: HTMLButtonElement = fixture.nativeElement.querySelector('.btn-outline-primary')

    buttonConvert.click()
    fixture.detectChanges()

    expect((navigateSpy)).toHaveBeenCalledWith(router.createUrlTree(['/listar-moedas']), jasmine.anything())

  });
});
