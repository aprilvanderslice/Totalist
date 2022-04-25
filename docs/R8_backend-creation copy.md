# Project & Portfolio VI 

* **RESEARCH 5 - "Backend Creation I"**
* **April Vanderslice**
* **6 March 2022**

<br>

## Avoiding Sequelize Hiccups
Setting up a Sequelize based project.

* Key Terms:
    * Config - configuration necessary to run Sequelize
    * Migrations - containing all changes made to tables
    * Models - structure of the tables and their properties
    * Seeders - default/sample data to fill the tables with
* Sequelize-CLI is a helper that creates all the necessary folders at setup and throughout the project
* Postico is a program used to verify the creation of the tables

<br>

## Many to Many Relationships
How to create a junction table to connect tables for a many to many relationship. 

* Sequelize can create the junction table for you by using the correct association methods
* Create the model with the correct references
* Update the associations in the models
* Use the convenience methods sequelize adds like 'create' or 'set[Modelname](). 

<br>

## Routes/Controllers
Refresher on routes/controllers in Express.

* Key Terms: 
    * routes forward the supported requests and any information encoded in request URLs to the appropriate controller functions
    * controller functions get the rquested data from the models, create an html page to display the data, and return it to the user to view in the browser.
    * views used by the controllers to render the data
* Using Express Router to define and use separate route modules
    * import express and the router object
    * add routes to it using the get() method
    * export the Router object
* To use the router in the main app file, require() the routes then call use()
* Route functions: the second argument in a .get() method, it's the function that gets called when the path is received
* Some callback functions: res.send(), res.json(), render()
* Route paths define the endpoints at which requests can be made. They can accept tstrings and JavaScript regex. 
* Route parameters: URL segments to capture values at specific positions in the url. Usualy written as `:/parameter`. These paramaters are sore in req.params object  as keys. The names of parameters must be made up of 'word characters' (A-Z, a-z, 0-9, and _)

<br>


## Reference Links
Use this section to highlight your own independent research. Replace the example references below with your own links and recommended resources. It is acceptable to provide multiple links for a single topic.  

What resource(s) did you find most helpful for this research assignment and why?
The article on Routes and Controllers is especially helpful. As I've been working this week to create the backend of my app I've found that this part of the project is giving me trouble. Today (3/6) I plan to try to work through work on my code with this article close by and do some problem solving. Hopefully this, along with the Present Your Code tutorial on routing and databases, will help me find some solutions.


**Resource 1: Present Your Code**  
[Routing](https://present.yourcode.app/f49cb840-3e2e-11e9-bc34-1176cd825b5c/1)  
[Databases](https://present.yourcode.app/00ec7850-4376-11e9-8833-797b593fe30b/1)





