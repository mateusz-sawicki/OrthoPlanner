import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FabBtnComponent } from './fab-btn.component';

describe('FabBtnComponent', () => {
  let component: FabBtnComponent;
  let fixture: ComponentFixture<FabBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FabBtnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FabBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
