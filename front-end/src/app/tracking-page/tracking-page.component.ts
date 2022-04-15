import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CancelComponent } from '../cancel/cancel.component';
import { RescheduleComponent } from '../reschedule/reschedule.component';
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
  transactionID: any;
  createdAt: any;
  status: any;
  ngOnInit() {
    this.events = [
      { content: 'Service Booked' },
      { content: 'Vehicle Servicing' },
      { content: 'Vehicle Washing'},
      { content: 'Service Complete'},
    ]

    if (this.data['status']=='1')
    { this.events = [
        { content: 'Service Booked', date: this.createdAt, status: 'R' },
        { content: 'Vehicle Servicing' },
        { content: 'Vehicle Washing'},
        { content: 'Service Complete'},
      ]
    }

    else if (this.data['status']=='2')
    { this.events = [
        { content: 'Service Booked', date: this.createdAt, status: 'R' },
        { content: 'Vehicle Servicing', status: 'R' },
        { content: 'Vehicle Washing'},
        { content: 'Service Complete'},
      ]
    }

    else if (this.data['status']=='3')
    { this.events = [
        { content: 'Service Booked', date: this.createdAt, status: 'R' },
        { content: 'Vehicle Servicing', status: 'R' },
        { content: 'Vehicle Washing', status: 'R'},
        { content: 'Service Complete'},
      ]
    }
    
    else
    { this.events = [
        { content: 'Service Booked', date: this.createdAt, status: 'R' },
        { content: 'Vehicle Servicing', status: 'R' },
        { content: 'Vehicle Washing', status: 'R'},
        { content: 'Service Complete', status: 'R' },
      ]
    } 
  }

  constructor(private transfer: TransferServiceService, private router: Router, private dialogref : MatDialog) { 
    if(this.data){
      console.log(this.data);
      console.log(this.data['status'])
      this.firstName = this.data["firstname"];
      this.lastName = this.data["lastname"];
      this.phoneNumber = this.data["phone_number"];
      this.email = this.data["email"];
      this.registration = this.data["registration_number"];
      this.serviceType = this.data["service_type"];
      this.serviceDate = this.data["appointment_date"];
      this.transactionID = this.data["tracking_id"];
      this.createdAt = this.data["created_at"];
    }
  }

  openReschedule(){
    this.dialogref.open(RescheduleComponent)
  }

  openCancel() {
    this.dialogref.open(CancelComponent)
  }

}
