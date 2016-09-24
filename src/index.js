import React from 'react'; // alternative way => import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { observable, autorun } from 'mobx';
import App from './App'
// ReactDOM.render(Component, targetElement)
ReactDOM.render(<App name="golfapipol.me" age={23}/>, document.getElementById('root'))

let state = observable({
  name: ''
})

autorun(() => {
  console.log(state.name);
})

state.name = 'Golf';