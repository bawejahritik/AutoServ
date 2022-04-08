import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RescheduleComponent } from './reschedule.component';

describe('RescheduleComponent', () => {
  let component: RescheduleComponent;
  let fixture: ComponentFixture<RescheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RescheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RescheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
