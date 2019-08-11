import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-tab-element',
  templateUrl: './tab-element.component.html',
  styleUrls: ['./tab-element.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class TabElementComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
