import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { EmployeeSignupComponent } from './employee-signup/employee-signup.component';
import { EmployerSignupComponent } from './employer-signup/employer-signup.component';
import { EmployeeHomeComponent } from './employee-home/employee-home.component';
import { EmployerHomeComponent } from './employer-home/employer-home.component';

const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'employee-signup', component: EmployeeSignupComponent },
  { path: 'employer-signup', component: EmployerSignupComponent },
  { path: 'employee-home', component: EmployeeHomeComponent },
  { path: 'employer-home', component: EmployerHomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
