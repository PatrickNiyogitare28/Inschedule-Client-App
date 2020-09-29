import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectAddFriComponent } from './direct-add-fri.component';

describe('DirectAddFriComponent', () => {
  let component: DirectAddFriComponent;
  let fixture: ComponentFixture<DirectAddFriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectAddFriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectAddFriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
