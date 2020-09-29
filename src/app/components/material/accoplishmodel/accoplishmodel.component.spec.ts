import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccoplishmodelComponent } from './accoplishmodel.component';

describe('AccoplishmodelComponent', () => {
  let component: AccoplishmodelComponent;
  let fixture: ComponentFixture<AccoplishmodelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccoplishmodelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccoplishmodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
