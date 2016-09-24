import React from 'react';

class Counter extends React.Component {
  render() {
    return (
      <div>
        <button className="increase">+</button>
        <span>0</span>
        <button className="decrease">-</button>
      </div>
    );
  }
}

export default Counter;