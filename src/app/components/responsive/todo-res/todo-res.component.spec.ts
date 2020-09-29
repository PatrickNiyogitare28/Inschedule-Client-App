import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoResComponent } from './todo-res.component';

describe('TodoResComponent', () => {
  let component: TodoResComponent;
  let fixture: ComponentFixture<TodoResComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoResComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
