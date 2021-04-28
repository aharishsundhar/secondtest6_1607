import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchallcoursesComponent } from './searchallcourses.component';

describe('SearchallcoursesComponent', () => {
  let component: SearchallcoursesComponent;
  let fixture: ComponentFixture<SearchallcoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchallcoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchallcoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});