import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentsRentACarComponent } from './investments-rent-a-car.component';

describe('InvestmentsRentACarComponent', () => {
  let component: InvestmentsRentACarComponent;
  let fixture: ComponentFixture<InvestmentsRentACarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestmentsRentACarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InvestmentsRentACarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
