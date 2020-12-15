import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayttComponent } from './displaytt.component';

describe('DisplayttComponent', () => {
  let component: DisplayttComponent;
  let fixture: ComponentFixture<DisplayttComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayttComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
