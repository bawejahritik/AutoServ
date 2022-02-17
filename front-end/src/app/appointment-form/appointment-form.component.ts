import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.css']
})
export class AppointmentFormComponent {

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}

  serviceForm = this.formBuilder.group({
    firstName:['', Validators.required],
    lastName:[''],
    phoneNumber:[''],
    email:[''],
    registrationNumber:[''],
    serviceType:[''],
    appointmentDate:[''],
  })

  submitForm() {
    this.http.post('http://localhost:8080/stars', this.serviceForm.value)
    console.log(this.serviceForm.value);
  }

  onClear() {
    this.serviceForm.reset();
  }

  ngOnInit(): void {
  }

}
