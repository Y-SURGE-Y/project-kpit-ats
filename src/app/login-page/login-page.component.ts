import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  activeTab: string = 'employee';
  employeeEmail: string = ''; // Employee email
  employeePassword: string = ''; // Employee password

  constructor(private router: Router) {}

  switchTab(tab: string) {
    this.activeTab = tab;
  }

  navigateToSignup() {
    if (this.activeTab === 'employee') {
      this.router.navigateByUrl('/employee-signup');
    } else if (this.activeTab === 'employer') {
      this.router.navigateByUrl('/employer-signup');
    }
  }
  login() {
    // Determine the home page route based on the user type (employee or employer)
    let homePageRoute = '/'; // Default home page route
    if (this.activeTab === 'employee') {
      homePageRoute = '/employee-home'; // Route for employee home page
    } else if (this.activeTab === 'employer') {
      homePageRoute = '/employer-home'; // Route for employer home page
    }
    this.router.navigateByUrl(homePageRoute);
  }

  navigateToLogin(option: string) {
    if (option === 'employee') {
      this.router.navigateByUrl('/login/employee');
    } else if (option === 'employer') {
      this.router.navigateByUrl('/login/employer');
    }
  }
}
