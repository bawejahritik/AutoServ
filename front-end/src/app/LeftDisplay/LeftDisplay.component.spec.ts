import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftDisplayComponent } from './LeftDisplay.component';

describe('RightdisplayComponent', () => {
  let component: LeftDisplayComponent;
  let fixture: ComponentFixture<LeftDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
