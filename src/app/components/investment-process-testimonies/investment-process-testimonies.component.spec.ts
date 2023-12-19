import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentProcessTestimoniesComponent } from './investment-process-testimonies.component';

describe('InvestmentProcessTestimoniesComponent', () => {
  let component: InvestmentProcessTestimoniesComponent;
  let fixture: ComponentFixture<InvestmentProcessTestimoniesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestmentProcessTestimoniesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InvestmentProcessTestimoniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
