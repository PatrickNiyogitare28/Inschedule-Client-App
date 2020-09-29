import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageResComponent } from './landing-page-res.component';

describe('LandingPageResComponent', () => {
  let component: LandingPageResComponent;
  let fixture: ComponentFixture<LandingPageResComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingPageResComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPageResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
