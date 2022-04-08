import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransferServiceService } from '../transfer-service.service';

@Component({
  selector: 'app-tracking-page',
  templateUrl: './tracking-page.component.html',
  styleUrls: ['./tracking-page.component.css']
})
export class TrackingPageComponent implements OnInit {
  data = this.transfer.getData();
  events: any[];
  firstName: any;
  lastName: any;
  phoneNumber: any;
  email: any;
  registration: any;
  serviceType: any;
  serviceDate: any;
  ngOnInit() {
    this.events = [
      { content: 'Service Booked', date: '03/03/2022 5:30', status: 'R' },
      { content: 'Vehicle Servicing', date: '03/03/2022 5:30', status: 'R' },
      { content: 'Vehicle Washing' },
      { content: 'Service Complete' },
    ]
  }

  constructor(private transfer: TransferServiceService, private router: Router) { 
    if(this.data){
      console.log(this.data);
      this.firstName = this.data["firstname"];
      this.lastName = this.data["lastname"];
      this.phoneNumber = this.data["phone_number"];
      this.email = this.data["email"];
      this.registration = this.data["registration_number"];
      this.serviceType = this.data["service_type"];
      this.serviceDate = this.data["appointment_date"];
    }
  }

}
