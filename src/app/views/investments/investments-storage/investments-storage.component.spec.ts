import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentsStorageComponent } from './investments-storage.component';

describe('InvestmentsStorageComponent', () => {
  let component: InvestmentsStorageComponent;
  let fixture: ComponentFixture<InvestmentsStorageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestmentsStorageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InvestmentsStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
