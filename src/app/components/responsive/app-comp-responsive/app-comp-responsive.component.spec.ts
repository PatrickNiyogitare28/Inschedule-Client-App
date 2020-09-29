import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCompResponsiveComponent } from './app-comp-responsive.component';

describe('AppCompResponsiveComponent', () => {
  let component: AppCompResponsiveComponent;
  let fixture: ComponentFixture<AppCompResponsiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppCompResponsiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppCompResponsiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
