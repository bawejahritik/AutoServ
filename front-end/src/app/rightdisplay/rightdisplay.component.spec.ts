import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightdisplayComponent } from './rightdisplay.component';

describe('RightdisplayComponent', () => {
  let component: RightdisplayComponent;
  let fixture: ComponentFixture<RightdisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightdisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RightdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
