import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  
  let mockLoginService, mockRouterService, mockFormBuilder;

  beforeEach(async(() => {

    mockLoginService = jasmine.createSpyObj(['verifyCredentials']);
    mockRouterService = jasmine.createSpyObj(['navigate']);
    // mockFormBuilder = jasmine.createSpyObj(['group']);

    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [FormsModule, ReactiveFormsModule],
      providers: [
        {provide: Router, useValue: mockFormBuilder},
        {provide: UserService, useValue: mockLoginService},
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('check if form is valid when empty', () => {
    let email = component.loginForm.controls["email"];
    let password = component.loginForm.controls["password"];
    email.setValue("amit@abc.com");
    password.setValue("amit123");
    // fixture.detectChanges();
    expect(component.loginForm.valid).toBeTruthy();
  });

  it("form is invalid if password length < 4", ()=>{
    let email = component.loginForm.controls["email"];
    let password = component.loginForm.controls["password"];
    email.setValue("amit@abc.com");
    password.setValue("123");
    expect(component.loginForm.valid).toBeFalsy();
    expect(component.loginForm.controls["password"].valid).toBeFalsy();
  })


});
