import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { createCustomElement } from '@angular/elements';
import { AppComponent } from './app.component';
import { HomeElementComponent } from './home-element/home-element.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeElementComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  
  bootstrap: [],
  entryComponents: [AppComponent, HomeElementComponent],
  //bootstrap: [AppComponent],
  //entryComponents: [HomeElementComponent],
})
export class AppModule {
  
  constructor(private injector: Injector) {}

  
  ngDoBootstrap(): void {

    const { injector } = this;

    // create custom elements from angular components
    const ngCustomElement = createCustomElement(HomeElementComponent, { injector });

    // define in browser registry
    customElements.define('home-element', ngCustomElement);

  }
 }