import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetScheduleResComponent } from './set-schedule-res.component';

describe('SetScheduleResComponent', () => {
  let component: SetScheduleResComponent;
  let fixture: ComponentFixture<SetScheduleResComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetScheduleResComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetScheduleResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
