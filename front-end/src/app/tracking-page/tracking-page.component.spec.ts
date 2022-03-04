import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackingPageComponent } from './tracking-page.component';

describe('TrackingPageComponent', () => {
  let component: TrackingPageComponent;
  let fixture: ComponentFixture<TrackingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackingPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
