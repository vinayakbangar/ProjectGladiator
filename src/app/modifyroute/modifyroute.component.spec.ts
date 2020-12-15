import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyrouteComponent } from './modifyroute.component';

describe('ModifyrouteComponent', () => {
  let component: ModifyrouteComponent;
  let fixture: ComponentFixture<ModifyrouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyrouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyrouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
