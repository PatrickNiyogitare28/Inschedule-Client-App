import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthoNavigativeComponent } from './autho-navigative.component';

describe('AuthoNavigativeComponent', () => {
  let component: AuthoNavigativeComponent;
  let fixture: ComponentFixture<AuthoNavigativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthoNavigativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthoNavigativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
