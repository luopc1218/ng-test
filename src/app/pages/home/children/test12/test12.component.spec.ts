import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {Test12Component} from './test12.component';

describe('Test12Component', () => {
  let component: Test12Component;
  let fixture: ComponentFixture<Test12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Test12Component]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Test12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
