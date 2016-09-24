import React, {Component} from 'react';
import Message from './Message'
class MessageList extends Component {
  render() {
    console.log("this.props.messages", this.props.messages);
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