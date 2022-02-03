import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightDisplayComponent } from './right-display.component';

describe('RightDisplayComponent', () => {
  let component: RightDisplayComponent;
  let fixture: ComponentFixture<RightDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RightDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
