import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentFormComponent } from "./appointment-form/appointment-form.component";
import { HomeComponent } from './home/home.component';
import { TrackComponent } from './track/track.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'AppointmentForm', component: AppointmentFormComponent },
  { path: 'Track', component: TrackComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
