import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  activeTab: string = 'employee';

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
}
