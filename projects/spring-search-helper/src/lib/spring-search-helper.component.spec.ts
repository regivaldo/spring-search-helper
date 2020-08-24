import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringSearchHelperComponent } from './spring-search-helper.component';

describe('SpringSearchHelperComponent', () => {
  let component: SpringSearchHelperComponent;
  let fixture: ComponentFixture<SpringSearchHelperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpringSearchHelperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpringSearchHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
