import { Component, Injector, ElementRef } from '@angular/core';
import { createCustomElement, NgElement, WithProperties } from '@angular/elements';
import { TabElementComponent } from './tab-element/tab-element.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tab-component';

  constructor(private injector: Injector, private elementRef:ElementRef) {

     // create custom elements from angular components
     const ngCustomElement = createCustomElement(TabElementComponent, { injector });

     // define in browser registry
     customElements.define('tab-element', ngCustomElement);

     const tabElement: NgElement & WithProperties<TabElementComponent> = document.createElement('tab-element') as any;
     tabElement.setAttribute("id", "tab-element");
     document.body.appendChild(tabElement);

  }

  ngOnInit() {
    // Log the name of selected Tab
    const tabElement = document.getElementById("tab-element");
    tabElement.addEventListener('tabSelected', (e) => console.log(e['detail']));
  }
  

   
}
