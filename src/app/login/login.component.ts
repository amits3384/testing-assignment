import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { USER_DETAILS } from '../shared/user-details.model';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService) { 
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }
  
  
  isLoggedIn = false;

  ngOnInit(): void {
  }

  onSubmit(){
    
    let enteredData:USER_DETAILS = this.loginForm.value

    this.isLoggedIn = this.userService.verifyCredentials(enteredData);
    
    if(this.isLoggedIn){
      this.router.navigate(['dashboard'])
    }
    else{
      this.router.navigate([''])
    }

  }

}
