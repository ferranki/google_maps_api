# How to execute the project?

Node version: 14.15.1\
Npm version:  6.14.8

1- Open the terminal on the root folder\
2- Execute the command `npm i`\
3- After install dependencies execute th command `npm start`


# How to execute the test?

We have two types of differents test:
- Unit test: to validate  a specific function
- End2End test: to validate a set of features from beginning to end

To execute unit test:\
`npm test`


To execute end2end test:\
`npm run test:e2e` Witohut graphical interface\
`npm run cypress` With graphical interface\




# Project details

## Template
The project has been created with [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## State

To control the main state of the app we used  [React Redux](https://react-redux.js.org/).


## Project structure

/src => main folder of the resources of the app\
    /app => contains all the views of the app\
    /feauteres => represents the usecases of the app\
    /infrastrcuture => resources like components and services..\
        /components => resources that usually represents graphical information\
        /services => group of functionalites that agroup infraestructure logic (calls to apis..)\
        /routes => all the routes that we have on the app\ 

## Code Optimization

We apply different solutions to split the code and add lazy loading to load fragment of code when is required [Code splitting](https://reactjs.org/docs/code-splitting.html)


## Request optimization google maps api
To prevent the request everytime that we want to retrieve information fromm google maps api we have been  implemented a cache solution. 

First we check if the value we want to consult has ever been consulted, in the case that if it has been consulted we take the value from the cache.  In the case that this value has never been consulted, we do the query and cache the result. 

You can read more about this solution here:
https://es.wikipedia.org/wiki/Memoizaci%C3%B3n

(Se podría iterar mucho mas en este aspecto, lo ideal sería que lo gestionara el backend de la app y no dependiera del usuario)

## Git Actions
I have configured a git action that every time that we do a push on the repository this action is going to execute end2end tests.

## Google maps api
All the logic related with google maps is decoupled from components and is wrapped into a services. 





# Most used commands

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.



# Google maps reference

Most used links to do the main features with google maps library.

### Google maps Places Autocomplete
https://developers.google.com/maps/documentation/javascript/places-autocomplete?hl=es_419

### Google maps Places Drawing
https://developers.google.com/maps/documentation/javascript/places-autocomplete?hl=es_419

### Reference of each class
https://developers.google.com/maps/documentation/javascript/reference?hl=en

### Samples 
https://developers.google.com/maps/documentation/javascript/examples/control-disableUI

