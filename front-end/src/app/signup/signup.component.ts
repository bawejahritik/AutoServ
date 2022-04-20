import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }
  alert:boolean=false;
  signupForm = this.formBuilder.group({
    firstName:['', Validators.required],
    lastName:['', Validators.required],
    phoneNumber:['', Validators.required],
    email:['', Validators.required],
    password: ['', Validators.required],
  })

  onClear() {
    this.signupForm.reset();
  }

  onSubmit() {
    this.alert=true;
  }

  ngOnInit(): void {
  }

}
