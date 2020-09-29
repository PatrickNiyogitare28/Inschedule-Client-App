import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetScheduleResComponent } from './get-schedule-res.component';

describe('GetScheduleResComponent', () => {
  let component: GetScheduleResComponent;
  let fixture: ComponentFixture<GetScheduleResComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetScheduleResComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetScheduleResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
