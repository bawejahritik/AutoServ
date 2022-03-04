import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tracking-page',
  templateUrl: './tracking-page.component.html',
  styleUrls: ['./tracking-page.component.css']
})
export class TrackingPageComponent implements OnInit {

  events: any[];
  ngOnInit() {
    this.events = [
      { content: 'Service Booked', date: '03/03/2022 5:30', status: 'R' },
      { content: 'Vehicle Servicing', date: '03/03/2022 5:30', status: 'R' },
      { content: 'Vehicle Washing' },
      { content: 'Service Complete' },
    ]
  }

  constructor() { }

}
