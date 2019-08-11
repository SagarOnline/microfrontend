import { Component, Injector, ElementRef } from '@angular/core';
import { createCustomElement, NgElement, WithProperties } from '@angular/elements';
import { HomeElementComponent } from './home-element/home-element.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'home-component';

  constructor(private injector: Injector, private elementRef:ElementRef) {

     // create custom elements from angular components
     const ngCustomElement = createCustomElement(HomeElementComponent, { injector });

     // define in browser registry
     customElements.define('home-element', ngCustomElement);

     const tabElement: NgElement & WithProperties<HomeElementComponent> = document.createElement('home-element') as any;
     tabElement.setAttribute("id", "home-element");
     document.body.appendChild(tabElement);

  }

  ngOnInit() {
    // Log the name of selected Tab
    const tabElement = document.getElementById("home-element");
    tabElement.addEventListener('tabSelected', (e) => console.log(e['detail']));
  }
  

   
}
