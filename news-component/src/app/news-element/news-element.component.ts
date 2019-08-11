import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-news-element',
  templateUrl: './news-element.component.html',
  styleUrls: ['./news-element.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class NewsElementComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
