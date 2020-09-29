import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterDirectAddSnackComponent } from './after-direct-add-snack.component';

describe('AfterDirectAddSnackComponent', () => {
  let component: AfterDirectAddSnackComponent;
  let fixture: ComponentFixture<AfterDirectAddSnackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfterDirectAddSnackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfterDirectAddSnackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
