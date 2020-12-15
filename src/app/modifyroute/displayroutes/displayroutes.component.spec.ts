import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayroutesComponent } from './displayroutes.component';

describe('DisplayroutesComponent', () => {
  let component: DisplayroutesComponent;
  let fixture: ComponentFixture<DisplayroutesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayroutesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayroutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
