import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { NavbarComponent } from './navbar/navbar.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AppointmentFormComponent } from './appointment-form/appointment-form.component';
import { LeftDisplayComponent } from './LeftDisplay/LeftDisplay.component';
import { HomeComponent } from './home/home.component';
import { TrackComponent } from './track/track.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ServicesComponent } from './services/services.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginComponent } from './login/login.component';
import { TrackingPageComponent } from './tracking-page/tracking-page.component';
import { TimelineComponent } from './timeline/timeline.component';
import { MatDialogModule } from '@angular/material/dialog';
import { PaymentComponent } from './payment/payment.component';
import { RescheduleComponent } from './reschedule/reschedule.component';
import { CancelComponent } from './cancel/cancel.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GalleryComponent,
    AppointmentFormComponent,
    LeftDisplayComponent,
    HomeComponent,
    TrackComponent,
    ServicesComponent,
    ContactUsComponent,
    LoginComponent,
    TrackingPageComponent,
    TimelineComponent,
    PaymentComponent,
    RescheduleComponent,
    CancelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule, 
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
