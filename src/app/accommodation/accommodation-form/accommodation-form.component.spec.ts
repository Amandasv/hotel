import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccommodationFormComponent } from './form.component';

describe('AccommodationFormComponent', () => {
  let component: AccommodationFormComponent;
  let fixture: ComponentFixture<AccommodationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccommodationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccommodationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
