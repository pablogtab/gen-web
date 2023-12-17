import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyGenComponent } from './why-gen.component';

describe('WhyGenComponent', () => {
  let component: WhyGenComponent;
  let fixture: ComponentFixture<WhyGenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhyGenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhyGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
