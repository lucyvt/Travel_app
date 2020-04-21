# Weather-Journal App Project

## Overview
This project requires you to create an asynchronous web app that uses Web API and user data to dynamically update the UI. 

## Instructions
This will require modifying the `server.js` file and the `website/app.js` file. You can see `index.html` for element references, and once you are finished with the project steps, you can use `style.css` to style your application to customized perfection.

## Extras
If you are interested in testing your code as you go, you can use `tests.js` as a template for writing and running some basic tests for your code.

## Objective
The main objective of this project was to create a website which fetched data from an external API based on information captured in a form. This involves using a client side and a sever side javascript code and many async functions. 

## Breakdown
# Project Dependencies
* An instance of the app is created using the express package.
* The cors package is installed, requires in the project file server.js and the instance of the app is setup to use cors():
* The body-parser package is installed and also included in the project:


# Local Server & Endpoint
A local server is running on Port 3000 which has a callback function confirming that the server is up and running. An endpoint array is created called projectData and this sits in server.js and is the end point for the API.

# Integrating OpenWeatherMap API
From creating credentials with Open Weather Map, the base URL (given in the email upon signing up) and a personal API key (also given in email) are stored as variables and then used alongside the zip code imputted on the website to fetch data from the API.

# Return Endpoint Data: Server Side & Client Side
There is a compination of GET routes and POST routes to capture the data. These use asunchronous functions to populate the end point for the API which then leads onto updating the HTML.

# Dynamic UI
The button included in project HTML has an addEventListener() method called on it for a click. When the button is clicked, the innerHTML is updated for the appropriate id with the information returned by the external API and the form. 
