import React from 'react'; // alternative way => import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component { // alternative way => class App extends Component {
  render() {
    return (<h1>Hello, React Component</h1>);
  }
}

// ReactDOM.render(Component, targetElement)
ReactDOM.render(<App />, document.getElementById('root'))

