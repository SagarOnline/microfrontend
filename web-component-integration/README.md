# Runtime Integration with Web Components
Web Component is a new standard supported by default in Chrome, Opera, Firefox and can be supported in others through polyfills.
It is a suite of below technologies allowing you to create reusable custom elements. For more details, please refer [WEBCOMPONENTS.ORG](https://www.webcomponents.org/introduction).

* **Custom elements**: A set of JavaScript APIs that allow you to define custom elements and their behaviour, which can then be used as desired in your user interface.
* **Shadow DOM**: A set of JavaScript APIs for attaching an encapsulated "shadow" DOM tree to an element — which is rendered separately from the main document DOM — and controlling associated functionality. In this way, you can keep an element's features private, so they can be scripted and styled without the fear of collision with other parts of the document.
* **HTML templates**: The &lt;template&gt; and &lt;slot&gt; elements enable you to write markup templates that are not displayed in the rendered page. These can then be reused multiple times as the basis of a custom element's structure.

## Example
This directory 'microfrontend/web-component-integration' have an example which demonstrates the Micro Frontend imlpementation using Web Component technology.

#### Components
It has below components which are all served from different servers.
* The **host-application** is a main application which hosts multiple micro frontends.
* **tab-component** is a angular8 application which provides a custom element to renders tab menu (having two menus : 'Home' and 'News')
* **home-component** is a angular8 application which provides a custom element to render the content of Home tab.
* **news-component** is a angular8 application which provides a custom element to render the content of News tab.

 Angular 8 applications are using 'Angular Elements' to expose HTML custom element.

#### How it works
In this example, All micro frontends  are bundled individually as webcomponent in single bundle (main.js). Angular8 supports HTML Custom Element functionality through 'Angular Elements'. It is used by these components to expose their custom elements. for e.g. **tab-component** provides '*&lt;tab-element&gt;*' to render Tab menu.

'host-application' loads the bundles of all the micro frontends. It is also the responsibility of host application to orchestrate the custom elements of web components. It also facilitates the communication between micro frontends through HTML event handling and element attributes.


## How to run this example locally

### Prerequisites
* Node.Js version 10.9 or greater
* Internet connection to download project dependencies

### Run 'tab-component'
* Open command prompt and Go to directory 'tab-component' 
* Download npm dependencies and Start application,
    ```
    npm install
    npm run start
    ```
* This will serve web component on http://localhost:9001/tab-component


### Run 'home-component'
* Open command prompt and Go to directory 'home-component' 
* Download npm dependencies and Start application,
    ```
    npm install
    npm run start
    ```
* This will serve this web component on http://localhost:9002/home-component

### Run 'news-component'
* Open command prompt and Go to directory 'news-component' 
* Download npm dependencies and Start application,
    ```
    npm install
    npm run start
    ```
* This will serve this web component on http://localhost:9003/news-component

### Run 'host-application'
* Open command prompt and Go to directory 'host-application' 
* Start application,
    ```
    npm run start
    ```
* This will serve this Host Application on http://localhost:8000

### Navigate to application

* Open URL http://localhost:8000 in browser
* Try switching Home and News tabs. 