import { compileComponentFromRender2 } from '@angular/compiler/src/render3/view/compiler';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentFormComponent } from "./appointment-form/appointment-form.component";
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ServicesComponent } from './services/services.component';
import { SignupComponent } from './signup/signup.component';
import { TrackComponent } from './track/track.component';
import { TrackingPageComponent } from './tracking-page/tracking-page.component';
import { UserpageComponent } from './userpage/userpage.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'AppointmentForm', component: AppointmentFormComponent },
  { path: 'Track', component: TrackComponent },
  { path: 'Services', component: ServicesComponent },
  { path: 'Contact-Us', component: ContactUsComponent },
  { path: 'Login', component: LoginComponent},
  { path: 'Tracking-page', component: TrackingPageComponent},
  { path: 'Signup', component: SignupComponent},
  { path: 'UserPage', component: UserpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
