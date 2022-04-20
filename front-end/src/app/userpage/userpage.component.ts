import { Component, OnInit } from '@angular/core';
import { TransferServiceService } from '../transfer-service.service';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit {

  data = this.transfer.getData();
  userName: any[];

  constructor(private transfer: TransferServiceService) {
    console.log(this.data)
    this.userName = this.data['userName'];
   }

  ngOnInit(): void {
  }

}
