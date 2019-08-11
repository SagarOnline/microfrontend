import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { createCustomElement } from '@angular/elements';
import { AppComponent } from './app.component';
import { TabElementComponent } from './tab-element/tab-element.component';

@NgModule({
  declarations: [
    AppComponent,
    TabElementComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [],
  entryComponents: [AppComponent, TabElementComponent],
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap(): void {

    const { injector } = this;

    // create custom elements from angular components
    const ngCustomElement = createCustomElement(TabElementComponent, { injector });

    // define in browser registry
    customElements.define('tab-element', ngCustomElement);

  }
 }