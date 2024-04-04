import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { EmployeeSignupComponent } from './employee-signup/employee-signup.component';
import { EmployerSignupComponent } from './employer-signup/employer-signup.component';
import { EmployeeHomeComponent } from './employee-home/employee-home.component';
import { EmployerHomeComponent } from './employer-home/employer-home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    EmployeeSignupComponent,
    EmployerSignupComponent,
    EmployeeHomeComponent,
    EmployerHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
