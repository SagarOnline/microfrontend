import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home-element',
  templateUrl: './home-element.component.html',
  styleUrls: ['./home-element.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class HomeElementComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
