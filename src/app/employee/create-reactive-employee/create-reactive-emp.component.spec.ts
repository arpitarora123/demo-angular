import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateReactiveEmployee } from './create-reactive-emp.component';

describe('EmpComponent', () => {
  let component: CreateReactiveEmployee;
  let fixture: ComponentFixture<CreateReactiveEmployee>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateReactiveEmployee ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateReactiveEmployee);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
