import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectAddTueComponent } from './direct-add-tue.component';

describe('DirectAddTueComponent', () => {
  let component: DirectAddTueComponent;
  let fixture: ComponentFixture<DirectAddTueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectAddTueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectAddTueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
