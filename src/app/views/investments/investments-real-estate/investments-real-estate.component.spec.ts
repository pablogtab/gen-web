import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentsRealEstateComponent } from './investments-real-estate.component';

describe('InvestmentsRealEstateComponent', () => {
  let component: InvestmentsRealEstateComponent;
  let fixture: ComponentFixture<InvestmentsRealEstateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestmentsRealEstateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InvestmentsRealEstateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
