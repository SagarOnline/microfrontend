import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { createCustomElement } from '@angular/elements';
import { AppComponent } from './app.component';
import { NewsElementComponent } from './news-element/news-element.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsElementComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  
  bootstrap: [],
  entryComponents: [AppComponent, NewsElementComponent],
  //bootstrap: [AppComponent],
  //entryComponents: [NewsElementComponent],
})
export class AppModule {
  
  constructor(private injector: Injector) {}

  
  ngDoBootstrap(): void {

    const { injector } = this;

    // create custom elements from angular components
    const ngCustomElement = createCustomElement(NewsElementComponent, { injector });

    // define in browser registry
    customElements.define('news-element', ngCustomElement);

  }
 }