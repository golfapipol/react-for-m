import React, {Component} from 'react';
import MessageList from './MessageList';
import MessageEntry from './MessageEntry';
class ChatBox extends Component {
  render() {
    return (
      <div>
        <MessageList />
        <MessageEntry />
      </div>
    );
  }
}

export default ChatBox;