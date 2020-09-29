import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectAddSatComponent } from './direct-add-sat.component';

describe('DirectAddSatComponent', () => {
  let component: DirectAddSatComponent;
  let fixture: ComponentFixture<DirectAddSatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectAddSatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectAddSatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
