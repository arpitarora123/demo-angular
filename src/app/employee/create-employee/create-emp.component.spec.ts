import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmployee } from './create-emp.component';

describe('EmpComponent', () => {
  let component: CreateEmployee;
  let fixture: ComponentFixture<CreateEmployee>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEmployee ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEmployee);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
