import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccommodationTableComponent } from './table.component';

describe('AccommodationTableComponent', () => {
  let component: AccommodationTableComponent;
  let fixture: ComponentFixture<AccommodationTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccommodationTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccommodationTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
