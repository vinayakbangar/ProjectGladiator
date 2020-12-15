import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBusComponentComponent } from './search-bus-component.component';

describe('SearchBusComponentComponent', () => {
  let component: SearchBusComponentComponent;
  let fixture: ComponentFixture<SearchBusComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchBusComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBusComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
