import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatettComponent } from './updatett.component';

describe('UpdatettComponent', () => {
  let component: UpdatettComponent;
  let fixture: ComponentFixture<UpdatettComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatettComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatettComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
