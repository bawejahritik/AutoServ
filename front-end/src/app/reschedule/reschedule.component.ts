import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormService } from '../form.service';

@Component({
  selector: 'app-reschedule',
  templateUrl: './reschedule.component.html',
  styleUrls: ['./reschedule.component.css']
})
export class RescheduleComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private form: FormService) { }
  alert:boolean=false;
  rescheduleForm = this.formBuilder.group({
    trackingID: ['', Validators.required],
    appointmentDate: ['']
  })
  
  reschedule() {
    this.form.rescheduleValues( this.rescheduleForm.value ).subscribe(res => {
      console.log(res);
      this.alert=true;
    });
  }

  ngOnInit(): void {
  }

}
