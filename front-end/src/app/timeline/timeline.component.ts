import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PaymentComponent } from '../payment/payment.component';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent {

  constructor(private dialogref : MatDialog) { }

  openDialog(){
    this.dialogref.open(PaymentComponent)
  }

  @Input() value: any[] = [];

}
