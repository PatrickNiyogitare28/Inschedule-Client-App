import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectAddSunComponent } from './direct-add-sun.component';

describe('DirectAddSunComponent', () => {
  let component: DirectAddSunComponent;
  let fixture: ComponentFixture<DirectAddSunComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectAddSunComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectAddSunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
