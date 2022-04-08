import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormService } from '../form.service';
import { TransferServiceService } from '../transfer-service.service';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent {

  constructor(private formBuilder: FormBuilder, private form: FormService, private router: Router, private transfer: TransferServiceService) {}
  trackForm = this.formBuilder.group({
    TrackingID: ['', Validators.required]
  })

  getTrack() {
    this.form.getValues( this.trackForm.get('TrackingID').value ).subscribe(res => {
      this.transfer.setData(res);
      this.router.navigateByUrl('/Tracking-page');
    });
  }

  ngOnInit(): void {
  }

}
