import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectAddMonComponent } from './direct-add-mon.component';

describe('DirectAddMonComponent', () => {
  let component: DirectAddMonComponent;
  let fixture: ComponentFixture<DirectAddMonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectAddMonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectAddMonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
