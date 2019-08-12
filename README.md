# Micro Frontend
Recently, microservices architectural style is being widely adopted in applications because of the benefits provided by it. Many such applications which also deal with UI, (along with microservices), usually do not apply these architecture principles to the UI. This many times limit the application's capability to take full benefit of microservice architecture. Micro frontend extend the microservice architecture concept to UI helping oragnizations to build end-to-end teams owning the delivery of module from UI till database. 

I have implemented some examples in this repository to demonstrate the concept of microfrontend implementation. These are explained in section [How to implement Micro Frontend](#How-to-implement-Micro-Frontend) . If you already know the concepts, then you can directly jump to this section. 

I have taken the reference from following resources to explain the Micro Frontend concepts. 

* [micro-frontends.org](https://micro-frontends.org/)
* Martin Fowler's blog on [microfrontend](https://martinfowler.com/articles/micro-frontends.html)
* Stefan Tilkov's presentation from [Microservices conference 2016, Berlin](https://www.youtube.com/watch?v=pU1gXA0rfwc)
* [Micro Frontends in Action](https://www.manning.com/books/micro-frontends-in-action)

I highly recommend to go through above resources as these concepts are very well explained in details there.

## Problem with UI monolith
Usually UI is built as fat monolith which consume the backend microservices. 
* Often implementing the enhancement also involve changes in UI along with backend microservices. Rolling out a change in monolith UI is difficult as it involves communication with other teams. 
* UI fuctionalities are highly coupled with other, making them difficult to test
* Upgrading to use new features in UI technologies is difficult as it could affect whole application.


## What are Micro Frontends
The idea behind Micro Frontends is to think about a website or web app as a composition of features which are owned by independent teams. Each team has a distinct area of business or mission it cares about and specialises in. A team is cross functional and develops its features end-to-end, from database to user interface.

## Benefits of Micro Frontends
Below are major benefits of micro frontends

* **Incremental upgrades** : Micro frontends can rollout their changes frequently without affecting other micro frontends.

* **Simple, decoupled codebases** : Codebase will be much smaller and focussed on specific functionality. By design, this architecture would make difficult for developers to make bad decisions. Coupling between multiple micro frontends can be handled through events.

* **Independent deployment**: Each microfrontend can have separate CI\CD pipelines making it autonomous.

* **Autonomous teams** : Organizations can build teams focussing on implementing specific functionality from UI to backend.


## Benefits of micro frontend explained with Examples

* Self service functionality
* Evaluating new feature in angular 8
* Freedom of technology
* Marketdata component which lists Equity Indices needs to be displayed in public application as well as some internal application
* 

## When to have microfrontend ?
Similar to microservices, applications are not always adivced to implement micro frontends. It depends on many factors such as 
* If your application have many functional modules and tend to increase coupling between them
* If you different scallability requirement across various modules
  
## Things to consider while developing Micro Frontends

### Be Technology Agnostic
Each team should be able to choose and upgrade their stack without having to coordinate with other teams. Custom Elements are a great way to hide implementation details while providing a neutral interface to others.

### Isolate Team Code
Don’t share a runtime, even if all teams use the same framework. Build independent apps that are self contained. Don’t rely on shared state or global variables.

### Establish Team Prefixes
Agree on naming conventions where isolation is not possible yet. Namespace CSS, Events, Local Storage and Cookies to avoid collisions and clarify ownership. 

### Favor Native Browser Features over Custom APIs
Use Browser Events for communication instead of building a global PubSub system. If you really have to build a cross team API, try keeping it as simple as possible.

### Build a Resilient Site
Your feature should be useful, even if JavaScript failed or hasn’t executed yet. Use Universal Rendering and Progressive Enhancement to improve perceived performance.

## How to implement Micro Frontend

There are below strategies to integrate micro frontends in application. Each strategy have their own benefits and trade-offs.

### Run-time integration via Web Components
In this strategy, micro frontends leverate the HTML Web Component technology to integrate and communicate with each others.
The example of this strategy in explained in details at [Runtime Integration with Web Components](web-component-integration/README.md)

### Server-side template composition

### Build-time integration

### Run-time integration via iframes

### Run-time integration via JavaScript





