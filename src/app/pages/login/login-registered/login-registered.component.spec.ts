import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LoginRegisteredComponent} from './login-registered.component';

describe('LoginRegisteredComponent', () => {
  let component: LoginRegisteredComponent;
  let fixture: ComponentFixture<LoginRegisteredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginRegisteredComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginRegisteredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
