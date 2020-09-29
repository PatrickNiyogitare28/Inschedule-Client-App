import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterDeleteSnackComponent } from './after-delete-snack.component';

describe('AfterDeleteSnackComponent', () => {
  let component: AfterDeleteSnackComponent;
  let fixture: ComponentFixture<AfterDeleteSnackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfterDeleteSnackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfterDeleteSnackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
