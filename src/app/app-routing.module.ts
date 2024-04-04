import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { EmployeeSignupComponent } from './employee-signup/employee-signup.component';
import { EmployerSignupComponent } from './employer-signup/employer-signup.component';

const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'employee-signup', component: EmployeeSignupComponent },
  { path: 'employer-signup', component: EmployerSignupComponent },
  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
