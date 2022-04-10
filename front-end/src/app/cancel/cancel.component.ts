import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormService } from '../form.service';

@Component({
  selector: 'app-cancel',
  templateUrl: './cancel.component.html',
  styleUrls: ['./cancel.component.css']
})
export class CancelComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private form: FormService) { }
  alert:boolean=false;
  cancelForm = this.formBuilder.group({
    trackingID: ['', Validators.required],
  })

  cancel() {
    this.form.cancelService( this.cancelForm.value ).subscribe(res => {
      console.log(res); 
      this.alert=true;
    });
  }

  ngOnInit(): void {
  }

}
