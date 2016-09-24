import React, {Component} from 'react';
import MessageList from './MessageList';
import MessageEntry from './MessageEntry';

import ChatStore from './ChatStore';
let chatStore = new ChatStore();
class ChatBox extends Component {
  render() {
    return (
      <div>
        <MessageList messages={chatStore.messages} />
        <MessageEntry chatStore={chatStore}/>
      </div>
    );
  }
}

export default ChatBox;