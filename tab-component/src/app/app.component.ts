import { Component, Injector } from '@angular/core';
import { createCustomElement, NgElement, WithProperties } from '@angular/elements';
import { TabElementComponent } from './tab-element/tab-element.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tab-component';

  constructor(private injector: Injector) {

     // create custom elements from angular components
     const ngCustomElement = createCustomElement(TabElementComponent, { injector });

     // define in browser registry
     customElements.define('tab-element', ngCustomElement);

     const tabElement: NgElement & WithProperties<TabElementComponent> = document.createElement('tab-element') as any;
     document.body.appendChild(tabElement);
  }

  

   
}
