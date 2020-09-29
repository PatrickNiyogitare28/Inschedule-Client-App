import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectAddThurComponent } from './direct-add-thur.component';

describe('DirectAddThurComponent', () => {
  let component: DirectAddThurComponent;
  let fixture: ComponentFixture<DirectAddThurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectAddThurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectAddThurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
