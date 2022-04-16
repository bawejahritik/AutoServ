import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // define the JSON of data
 
  public countries: { [key: string]: Object; }[] = [
 
    { Name: 'Australia', Code: 'AU' },

    { Name: 'Bermuda', Code: 'BM' },
  ];
          // maps the local data column to fields property
 
          public localFields: Object = { text: 'Name', value: 'Code' };
 
          // set the placeholder to Dropdown List input element
   
        public localWaterMark: string = 'Select countries';
}
