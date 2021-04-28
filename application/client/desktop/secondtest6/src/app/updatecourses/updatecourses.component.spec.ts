import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatecoursesComponent } from './updatecourses.component';

describe('UpdatecoursesComponent', () => {
  let component: UpdatecoursesComponent;
  let fixture: ComponentFixture<UpdatecoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatecoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatecoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});