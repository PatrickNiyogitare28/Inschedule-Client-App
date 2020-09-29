import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccoplishedComponent } from './accoplished.component';

describe('AccoplishedComponent', () => {
  let component: AccoplishedComponent;
  let fixture: ComponentFixture<AccoplishedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccoplishedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccoplishedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
