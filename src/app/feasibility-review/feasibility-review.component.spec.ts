import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeasibilityReviewComponent } from './feasibility-review.component';

describe('FeasibilityReviewComponent', () => {
  let component: FeasibilityReviewComponent;
  let fixture: ComponentFixture<FeasibilityReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeasibilityReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeasibilityReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
