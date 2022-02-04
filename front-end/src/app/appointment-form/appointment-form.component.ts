import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.css']
})
export class AppointmentFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) {}

  serviceForm = this.formBuilder.group({
    firstName:[''],
    lastName:[''],
    phoneNumber:[''],
    email:[''],
    registrationNumber:[''],
    serviceType:[''],
    appointmentDate:[''],
  })

  submitForm() {
    alert("Submitted")
  }

  onClear() {
    this.serviceForm.reset();
  }

  ngOnInit(): void {
  }

}
