import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentsBuildingsComponent } from './investments-buildings.component';

describe('InvestmentsBuildingsComponent', () => {
  let component: InvestmentsBuildingsComponent;
  let fixture: ComponentFixture<InvestmentsBuildingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestmentsBuildingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InvestmentsBuildingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
