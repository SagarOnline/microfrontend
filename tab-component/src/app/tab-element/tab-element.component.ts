import { Component, OnInit, ViewEncapsulation, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tab-element',
  templateUrl: './tab-element.component.html',
  styleUrls: ['./tab-element.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class TabElementComponent implements OnInit {

  selectedMenu:string;

  @Output() tabSelected: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  showHome(){
    this.tabSelected.emit('home');
    this.selectedMenu = 'home';
  }

  showNews(){
    this.tabSelected.emit('news');
    this.selectedMenu = 'news';
  }

}
