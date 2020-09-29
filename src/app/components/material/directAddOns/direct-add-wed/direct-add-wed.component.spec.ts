import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectAddWedComponent } from './direct-add-wed.component';

describe('DirectAddWedComponent', () => {
  let component: DirectAddWedComponent;
  let fixture: ComponentFixture<DirectAddWedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectAddWedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectAddWedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
