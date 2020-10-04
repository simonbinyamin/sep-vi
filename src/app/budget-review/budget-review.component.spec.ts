import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetReviewComponent } from './budget-review.component';

describe('BudgetReviewComponent', () => {
  let component: BudgetReviewComponent;
  let fixture: ComponentFixture<BudgetReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BudgetReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
