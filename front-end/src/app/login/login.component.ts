import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TransferServiceService } from '../transfer-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private transfer: TransferServiceService) { }
  loginForm = this.formBuilder.group({
    userName: ['', Validators.required],
    password: ['', Validators.required],
  })

  onSubmit() {
    this.transfer.setData( this.loginForm.value);
    this.router.navigateByUrl('/UserPage');
  }

  ngOnInit(): void {
  }

}
