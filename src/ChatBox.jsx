import React, {Component} from 'react';
import MessageList from './MessageList';
import MessageEntry from './MessageEntry';

import ChatStore from './ChatStore';

class ChatBox extends Component {
  render() {
    let chatStore = new ChatStore();
    return (
      <div>
        <MessageList chatStore={chatStore} />
        <MessageEntry chatStore={chatStore}/>
      </div>
    );
  }
}

export default ChatBox;