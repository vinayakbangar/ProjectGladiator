import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifybusComponent } from './modifybus.component';

describe('ModifybusComponent', () => {
  let component: ModifybusComponent;
  let fixture: ComponentFixture<ModifybusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifybusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifybusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
