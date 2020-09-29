import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccomplishedResComponent } from './accomplished-res.component';

describe('AccomplishedResComponent', () => {
  let component: AccomplishedResComponent;
  let fixture: ComponentFixture<AccomplishedResComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccomplishedResComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccomplishedResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
