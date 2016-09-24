import React, {Component} from 'react';
import Message from './Message'
import {observer} from 'mobx-react'
@observer
class MessageList extends Component {
  render() {
    return (
      <div>
        {
          this.props.chatStore.messages.map((message, index) => {
            return <Message key={index} text={message}/>
          })
        }
        <p>{this.props.chatStore.messageCount}</p>
      </div>
    );
  }
}

export default MessageList;