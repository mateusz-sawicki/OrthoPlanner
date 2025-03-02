import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreatmentsPlansComponent } from './treatments-plans.component';

describe('TreatmentsPlansComponent', () => {
  let component: TreatmentsPlansComponent;
  let fixture: ComponentFixture<TreatmentsPlansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TreatmentsPlansComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreatmentsPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
