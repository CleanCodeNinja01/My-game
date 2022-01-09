# Tic Tac Toe game on React

- This is a basic tic tac toe game using Redux layers

- To start this project:
* Run npm install
* npm start, if no port is already in use it would redirect to http://localhost:3000

A simple walk through of redux in our project:
redux is a state management library of different layers, in this opensource project I have used 4 layers:
* Actions - Actions are any work you want to perform
* Container (path: src/components/Board/Square/Square.jsx) - Container is responsible for dispatching your actions
It maps your state and actions to props
* Reducers are responsible are responsible for reducing actions on the basis of type of actions
These reducers are then combined to one single reducer also called as combined reducer
* Finally rendering it to the component page

- Usage of constants in place of loose strings are used as src/helpers/actionTypes.js 

- Usage of redux thunk : While redux is a predictable state container, redux thunk is basically a middleware that can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. 

Pre-requisites:
* Basic ES6
* Knowledge of Higher Order Functions
* Knowledge of spread operators
* Basic knowledge of React for props

Check my project here : https://d2tbogunvaotsq.cloudfront.net/

Happy Coding! :) 
