import React from 'react';

class App extends React.Component { // alternative way => class App extends Component {
  // constructor() {
  //   // this.state = {name: 'golfapipol.me'}
  // }
  render() {
    this.props.age = 10;
    return (<h1>Hello, React Component build by {this.props.name} {this.props.age + 1}</h1>);
  }
}


export default App;