import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  myScriptElement: HTMLScriptElement;

  constructor() { 
    this.myScriptElement = document.createElement("script");
    this.myScriptElement.src = "src/assets/scripts/gallery_auto.js";
    document.body.appendChild(this.myScriptElement);
  }

  ngOnInit(): void {
  }

}
