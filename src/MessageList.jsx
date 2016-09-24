import React, {Component} from 'react';
import Message from './Message'
import {observer} from 'mobx-react'
@observer
class MessageList extends Component {
  render() {
    return (
      <div>
        {
          this.props.messages.map((message, index) => {
            return <Message key={index} text={message}/>
          })
        }
      </div>
    );
  }
}

export default MessageList;