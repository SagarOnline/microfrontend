# Micro Frontend
Recently, microservices architectural style is being widely adopted in applications because of the benefits provided by it. Many such applications which also deal with UI, (along with microservices), usually do not apply these architecture principles to the UI. This many times limit the application's capability to take full benefit of microservice architecture. Micro frontend extend the microservice architecture concept to UI helping oragnizations to build end-to-end teams owning the delivery of module from UI till database. 

This repository have some examples to demonstrate the concept of microfrontend implementation. I have taken the reference from following resources to develope the content available in this repository. 

* [micro-frontends.org](https://micro-frontends.org/)
* Martin Fowler's blog on [microfrontend](https://martinfowler.com/articles/micro-frontends.html)
* Stefan Tilkov's presentation from [Microservices conference 2016, Berlin](https://www.youtube.com/watch?v=pU1gXA0rfwc)
* [Micro Frontends in Action](https://www.manning.com/books/micro-frontends-in-action)

I highly recommend to go through above resources as these concepts are very well explained in details there. Below sections mainly cover various aspects of the micro frontend implementations with examples. But to set the context, few concepts are also explained in short in below sections. 

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
  
  
How to implement it ?


