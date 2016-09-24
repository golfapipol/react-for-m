import React, {Component} from 'react';

class MessageEntry extends Component {
  constructor() {
    super();
    this.state = {
      entry: ''
    }
  }
  onSendMessage = () => {
    console.log("send!!")
    this.props.chatStore.messages.push(this.state.entry)
    // this.setState({entry: ''})
  }
  onChangeEntry = (e) => {
    this.setState({entry: e.target.value});
    console.log("this.state", this.state.entry)
  }
  render() {
    return (
      <div>
        <input type="text" onChange={this.onChangeEntry}/>
        <button onClick={this.onSendMessage}>Send</button>
      </div>
    );
  }
}

export default MessageEntry;