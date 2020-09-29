import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetscheduleComponent } from './setschedule.component';

describe('SetscheduleComponent', () => {
  let component: SetscheduleComponent;
  let fixture: ComponentFixture<SetscheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetscheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetscheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
