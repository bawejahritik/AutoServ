import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormService } from '../form.service';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent {

  constructor(private formBuilder: FormBuilder, private form: FormService) {}
  trackForm = this.formBuilder.group({
    TrackingID: ['', Validators.required]
  })

  getTrack() {
    this.form.getValues( this.trackForm.get('TrackingID').value ).subscribe(res => {
      console.log(res);
    });
  }

  ngOnInit(): void {
  }

}
