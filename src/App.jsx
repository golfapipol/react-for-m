import React from 'react';

class App extends React.Component { // alternative way => class App extends Component {
  constructor() {
    super();
    this.state = {name: 'Golf'}
  }
  
  onChangeText(e) {
    this.state.name = e.target.value;
  }

  render() {
    return (
      <div>
        <h1>Hello, React Component build by {this.state.name} {this.props.age + 1}</h1>
        <input type="text" onChange={this.onChangeText} />
      </div>
    );
  }
}


export default App;