import React, {Component} from 'react';

class Message extends Component {
  render() {
    return (<p>{this.props.text}</p>);
  }
}

export default Message;