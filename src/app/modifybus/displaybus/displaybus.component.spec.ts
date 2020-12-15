import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaybusComponent } from './displaybus.component';

describe('DisplaybusComponent', () => {
  let component: DisplaybusComponent;
  let fixture: ComponentFixture<DisplaybusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplaybusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaybusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
