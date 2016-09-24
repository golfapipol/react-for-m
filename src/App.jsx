import React from 'react';
import Counter from './Counter';
import CounterStore from './CounterStore';

let counterStore = new CounterStore();

class App extends React.Component { // alternative way => class App extends Component {
  constructor() {
    super();
    this.state = {name: 'Golf'}
  }
  
  onChangeText = (e) => {
    // this.state.name = e.target.value;
    let newState = e.target.value;
    this.setState({name: newState})
    console.log(this.state.name, "Changed")
  }

  render() {
    return (
      <div>
        <h1>Hello, React Component build by {this.state.name} {this.props.age + 1}</h1>
        <input type="text" onChange={this.onChangeText} value={this.state.name} />
        <Counter counterStore={counterStore}/>
      </div>
    );
  }
}


export default App;