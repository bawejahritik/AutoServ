import { Component } from '@angular/core';
import { FormService } from '../form.service';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent {

  constructor(private form: FormService) {}

  getTrack() {
    this.form.getValues().subscribe(res => {
      console.log(res);
    });
  }

  ngOnInit(): void {
  }

}
