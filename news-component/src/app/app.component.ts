import { Component, Injector, ElementRef } from '@angular/core';
import { createCustomElement, NgElement, WithProperties } from '@angular/elements';
import { NewsElementComponent } from './news-element/news-element.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'news-component';

  constructor(private injector: Injector, private elementRef:ElementRef) {

     // create custom elements from angular components
     const ngCustomElement = createCustomElement(NewsElementComponent, { injector });

     // define in browser registry
     customElements.define('news-element', ngCustomElement);

     const tabElement: NgElement & WithProperties<NewsElementComponent> = document.createElement('news-element') as any;
     tabElement.setAttribute("id", "news-element");
     document.body.appendChild(tabElement);

  }

  ngOnInit() {
    // Log the name of selected Tab
    const tabElement = document.getElementById("news-element");
    tabElement.addEventListener('tabSelected', (e) => console.log(e['detail']));
  }
  

   
}
