import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialRequestComponent } from './financial-request.component';

describe('FinancialRequestComponent', () => {
  let component: FinancialRequestComponent;
  let fixture: ComponentFixture<FinancialRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancialRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
