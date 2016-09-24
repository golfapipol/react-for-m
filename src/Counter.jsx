import React from 'react';

class Counter extends React.Component {

  constructor() {
    super();
    this.state = { count: 0 };
  }
  increase = () => {
    let newState = this.state.count + 1;
    this.setState({count: newState})
  }
  render() {
    return (
      <div>
        <button className="increase" onClick={this.increase}>+</button>
        <span>{this.state.count}</span>
        <button className="decrease">-</button>
      </div>
    );
  }
}

export default Counter;