import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormService } from '../form.service';

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.css']
})
export class AppointmentFormComponent {

  constructor(private formBuilder: FormBuilder, private form: FormService) {}
  alert:boolean=false;
  trackID: any;
  serviceForm = this.formBuilder.group({
    firstName:['', Validators.required],
    lastName:['', Validators.required],
    phoneNumber:['', Validators.required],
    email:['', Validators.required],
    registrationNumber:['', Validators.required],
    serviceType:['', Validators.required],
    appointmentDate:['', Validators.required],
  })

  submitForm() {
    this.form.saveValues( this.serviceForm.value ).subscribe(res => {
      this.trackID = res["trackingID"];
      console.log('Tracking ID: ', res);
      this.alert=true;
    });

  }

  onClear() {
    this.serviceForm.reset();
  }

  ngOnInit(): void {
  }

}

