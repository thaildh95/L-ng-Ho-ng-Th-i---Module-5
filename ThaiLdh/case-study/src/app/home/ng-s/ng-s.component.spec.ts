import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSComponent } from './ng-s.component';

describe('NgSComponent', () => {
  let component: NgSComponent;
  let fixture: ComponentFixture<NgSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
